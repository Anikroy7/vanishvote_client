export type Inputs = {
    pollType: string, 
    question: string,
    expiredAt: string,
    options: { option: string }[];
    private: boolean
    resultsHidden: boolean
}

export type TPollType = "yes_no" | "multiple_choice";

export type TOption= {
  text: string;
  vote: string[];
}

export type TPoll= {
  _id: string;
  pollType: TPollType;
  options: TOption[];
  question: string;
  createdAt: string;
  expiresAt: string;
  resultsHidden: boolean;
  private: boolean;
  createdBy: string;
  reactions: TReaction[];
}


export type TReaction = { reactionType: string; userId: string }