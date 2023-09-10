export const relativeTime = (timeString: string): string => {
  const [hours, minutes] = timeString.split(":").map(Number);
  let result = "";

  if (hours > 0) {
    result += `${hours} ساعت `;
  }

  if (minutes > 0) {
    result += `${minutes} دقیقه`;
  }

  return result.trim();
};
