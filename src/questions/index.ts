type Question = {
  language: string
  paper: string
  plum: string
}

export const questions = [
  { language: 'swedish', paper: 'papper', plum: 'plommon' },
  { language: 'norwegian', paper: 'papir', plum: 'plomme' },
  { language: 'english', paper: 'paper', plum: 'plum' },
] satisfies Question[]
