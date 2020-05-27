const iniState = {
  posts: [
    {
      id: "1",
      title: " The Kite Runner",
      body:
        "The Kite Runner is the first novel by Afghan-American author Khaled Hosseini.[1] Published in 2003 by Riverhead Books, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul, whose closest friend is Hassan. The story is set against a backdrop of tumultuous events, from the fall of Afghanistan's monarchy through the Soviet military intervention, the exodus of refugees to Pakistan and the United States, and the rise of the Taliban regime",
    },
    {
      id: "2",
      title: "A man called Ove",
      body:
        "A Man Called Ove is a Swedish comedy-drama film which was released to cinemas in Sweden 25 December 2015.[3] The film was written and directed by Hannes Holm, and is based on author Fredrik Backman's 2012 book of the same name. In the leading role as Ove is Rolf Lassgård.[4] The film was nominated for six awards, winning two, at the 51st Guldbagge Awards in 2016.[5][6] It was nominated for the Best Foreign Language Film and Best Makeup and Hairstyling categories at the 89th Academy Awards",
    },
    {
      id: "3",
      title: "Tuesday with Morrie",
      body:
        "Tuesdays with Morrie is a memoir[1] by American author Mitch Albom[2] about a series of visits Albom made to his former sociology professor Morrie Schwartz, as Schwartz gradually dies of ALS",
    },
  ],
};
const rootReducer = (state = iniState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter((post) => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts,
    };
  }
  return state;
};

export default rootReducer;
