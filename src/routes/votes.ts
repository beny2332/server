import { Request, Response } from "express"
import { handleNewVote } from "../services/votes"
import { VoteDto } from "../types/dto/vote"

export const vote = async (req: Request<{}, {}, VoteDto>, res: Response) => {
  try {
    console.log({vt:req.body})
    const updatedCandidate = await handleNewVote(req.body)
    res.status(200).json(updatedCandidate)
  } catch (err) {
    res.status(400).json((err as Error).message)
  }
}
