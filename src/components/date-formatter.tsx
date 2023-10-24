import { format, parseISO } from "date-fns";

interface Props {
  dateString: string;
  customFormat?: string;
}

const DateFormatter = ({ dateString, customFormat = "LLLL	d, yyyy" }: Props) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, customFormat)}</time>;
};

export default DateFormatter;
