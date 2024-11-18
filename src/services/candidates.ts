import Candidate from "../models/candidate"
export const initDatabase = async () => {
  try {
    const cands = [
      {
        name: "Donald Trump",
        image: " https://www.loc.gov/item/2017645723/",
      },
      {
        name: "Kamala Harris",
        image: "https://depositphotos.com/editorial/san-francisco-august-2019-presidential-candidate-kamala-harris-speaking-democratic-310553008.html",
      },
      {
        name: "RFK jr",
        image: "https://cdn.britannica.com/80/245980-050-58338C16/Robert-F-Kennedy-Jr-2023-Faulkner-Focus-Fox-News.jpg",
      },
      {
        name: "Sleepy Joe",
        image: "https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg?resize=2048,1536",
      },
      {
        name: "The real Trump 😉",
        image: "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fkill-tony-election-special-shane-gillis-as-trump-and-david-v0-y3ynemwstygd1.png%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3D1b5658138493d7ccd64f9b2a1d4e0b4e52086054",
      },
    ]
    for (const cand of cands) {
      const newCand = new Candidate(cand)
      await newCand.save()
    }
  } catch (err) {
    console.log("Error accured while creating initial state of candidates", err)
  }
}

export const getCandidateList = async () => {
  try {
    const list = await Candidate.find({})
    return list
  } catch (err) {
    throw err
  }
}
