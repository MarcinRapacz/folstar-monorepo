interface IH6Props {
  children: React.ReactNode;
}

export default function H6({ children }: IH6Props) {
  return <h6 className="text-lg font-bold dark:text-white">{children}</h6>;
}
