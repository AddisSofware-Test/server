const mongoose = require("mongoose");
const Song = require("./models/song");

mongoose.connect('mongodb://127.0.0.1:27017/addis-test')

const songsData = [
    { title: "Chelsea Smile", artist: "Bring Me The Horizon", album: "Suicide Season", genre: "metal" },
    { title: "Diamonds Aren't Forever", artist: "Bring Me The Horizon", album: "Suicide Season", genre: "metal" },
    { title: "Death Breath", artist: "Bring Me The Horizon", album: "Suicide Season", genre: "metal" },
    { title: "Suicide Season", artist: "Bring Me The Horizon", album: "Suicide Season", genre: "metal" },
    { title: "Doomed", artist: "Bring Me The Horizon", album: "That's The Spirit", genre: "metal" },
    { title: "Throne", artist: "Bring Me The Horizon", album: "That's The Spirit", genre: "metal" },
    { title: "Drown", artist: "Bring Me The Horizon", album: "That's The Spirit", genre: "metal" },
    { title: "Leech", artist: "Bullet For My Valentine", album: "Temper Temper", genre: "metal" },
    { title: "Scream Aim Fire", artist: "Bullet For My Valentine", album: "Scream Aim Fire", genre: "metal" },
    { title: "Hearts Burst into Fire", artist: "Bullet For My Valentine", album: "Scream Aim Fire", genre: "metal" },
    { title: "Waking the Demon", artist: "Bullet For My Valentine", album: "Scream Aim Fire", genre: "metal" },
    { title: "Your Betrayal", artist: "Bullet For My Valentine", album: "Fever", genre: "metal" },
    { title: "A Place Where You Belong", artist: "Bullet For My Valentine", album: "Fever", genre: "metal" },
    { title: "Tears Don't Fall", artist: "Bullet For My Valentine", album: "The Poison", genre: "metal" },
    { title: "Suffocating Under Words Of Sorrow (What Can I Do)", artist: "Bullet For My Valentine", album: "The Poison", genre: "metal" },
    { title: "Do I Wanna Know?", artist: "Arctic Monkeys", album: "AM", genre: "rock" },
    { title: "R U Mine?", artist: "Arctic Monkeys", album: "AM", genre: "rock" },
    { title: "I Want It All", artist: "Arctic Monkeys", album: "AM", genre: "rock" },
    { title: "Snap Out Of It", artist: "Arctic Monkeys", album: "AM", genre: "rock" },
    { title: "Eleanor Rigby", artist: "The Beatles", album: "Revolver", genre: "rock" },
    { title: "I'm Only Sleeping", artist: "The Beatles", album: "Revolver", genre: "rock" },
    { title: "Here, There And Everywhere", artist: "The Beatles", album: "Revolver", genre: "pop" },
    { title: "Good Day Sunshine", artist: "The Beatles", album: "Revolver", genre: "rock" },
    { title: "Something", artist: "The Beatles", album: "Abbey Road", genre: "pop" },
    { title: "Maxwell's Silver Hammer", artist: "The Beatles", album: "Abbey Road", genre: "rock" },
    { title: "Oh! Darling", artist: "The Beatles", album: "Abbey Road", genre: "rock" },
    { title: "Here Comes The Sun", artist: "The Beatles", album: "Abbey Road", genre: "pop" },
    { title: "Dear Prudence", artist: "The Beatles", album: "The White Album", genre: "pop" },
    { title: "While My Guitar Gently Weeps", artist: "The Beatles", album: "The White Album", genre: "rock" },
    { title: "Blackbird", artist: "The Beatles", album: "The White Album", genre: "pop" },
    { title: "Julia", artist: "The Beatles", album: "The White Album", genre: "pop" },
    { title: "Helter Skelter", artist: "The Beatles", album: "The White Album", genre: "rock" },
    { title: "I Will", artist: "The Beatles", album: "The White Album", genre: "pop" },
  ];

  const seedDatabase = async () => {
    try {  
      const result = await Song.insertMany(songsData);
      console.log(`${result.length} songs added to the database.`);
    } catch (error) {
      console.error("Error seeding the database:", error);
    } finally {
      mongoose.connection.close();
    }
  };

  seedDatabase();