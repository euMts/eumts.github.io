export const getDate = () => {
  try {
    // User's timezone
    const currentDate = new Date();

    const formattedDate = {
      day: currentDate.toLocaleString(undefined, { day: "2-digit" }),
      month: currentDate.toLocaleString(undefined, { month: "2-digit" }),
      year: currentDate.toLocaleString(undefined, { year: "numeric" }),
      hour: currentDate.toLocaleString(undefined, { hour: "2-digit" }),
      minute: currentDate.toLocaleString(undefined, { minute: "2-digit" }),
      second: currentDate.toLocaleString(undefined, { second: "2-digit" }),
    };

    return formattedDate;
  } catch (error) {
    // Server's timezone
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();
    const hour = String(currentDate.getHours()).padStart(2, "0");
    const minute = String(currentDate.getMinutes()).padStart(2, "0");
    const second = String(currentDate.getSeconds()).padStart(2, "0");

    const formattedDate = {
      day,
      month,
      year,
      hour,
      minute,
      second,
    };

    return formattedDate;
  }
};
