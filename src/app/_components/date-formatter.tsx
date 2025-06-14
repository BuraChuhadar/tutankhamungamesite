import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time 
      dateTime={dateString}
      className="text-sm md:text-base text-gray-600 dark:text-gray-400 block text-center md:text-left mb-6"
    >
      {format(date, "LLLL d, yyyy")}
    </time>
  );
};

export default DateFormatter;
