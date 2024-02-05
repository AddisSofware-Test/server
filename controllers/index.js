const Song = require("../models/song");

class Controller {
  static async createSong(req, res, next) {
    try {
      const { title, artist, album, genre } = req.body;

      const NewSong = new Song({ title, artist, album, genre });
      const result = await NewSong.save();

      res.status(201).json({
        status: true,
        message: "Succesfully create new song",
        statusCode: "OK",
        response: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getSongList(req, res, next) {
    try {
      const { genre, page, limit } = req.query;
      let query = {};

      if (genre) query = { genre: genre.toLowerCase() };

      const skip = (page - 1) * limit;

      const totalItem = await Song.countDocuments(query);

      const result = await Song.find(query)
        .skip(skip)
        .limit(parseInt(limit, 10));

      const transformResult = result.map((d, k) => {
        const { _id, title, artist, album, genre, createdAt, updatedAt } = d;
        return {
          no: k + 1,
          _id,
          title,
          artist,
          album,
          genre,
          createdAt,
          updatedAt,
        };
      });

      const totalPage = Math.ceil(totalItem / limit);

      const pagination = {
        currentPage: parseInt(page, 10),
        totalPage,
        totalItem,
        perPage: parseInt(limit, 10),
      };
      res.status(200).json({
        status: true,
        message: "Successfully retrieved all songs",
        statusCode: "OK",
        response: transformResult,
        pagination,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateSong(req, res, next) {
    try {
      const { id } = req.params;
      const { title, artist, album, genre } = req.body;

      const updatedSong = await Song.findByIdAndUpdate(id, {title, artist, album, genre}, {new: true})

      if(!updatedSong) {
        throw {
            name: 'notfound',
            message: 'Song not found'
        }
      }
      res.status(200).json({
        status: true,
        message: "Successfully updated song",
        statusCode: "OK",
        response: updatedSong,
      });
    } catch (error) {
        next(error)
    }
  }

  static async songDetail(req, res, next) {
    try {
        const {id} = req.params
        const result = await Song.findById(id)
        res.status(200).json({
            status: true,
            message: "Successfully retrieved all songs",
            statusCode: "OK",
            response: result
          });
    } catch (error) {
        next(error)
    }
  }

  static async songDelete(req, res, next){
    try {
        const {id}= req.params

        const deletedSong = await Song.findByIdAndDelete(id)
        res.status(200).json({
            status: true,
            message: "Successfully deleted song",
            statusCode: "OK",
            response: deletedSong,
          });
    } catch (error) {
        next(error)
    }
  }

  static async getStatistic(req, res, next){
    try {
      const totalCounts = await Song.aggregate([
        {
          $group: {
            _id: null,
            totalSongs: { $sum: 1 },
            totalArtists: { $addToSet: "$artist" },
            totalAlbums: { $addToSet: "$album" },
            totalGenres: { $addToSet: "$genre" },
          },
        },
      ]);

      res.status(200).json({
        status: true,
        message: "Successfully get statistic",
        statusCode: "OK",
        response: totalCounts,
      });
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller;
