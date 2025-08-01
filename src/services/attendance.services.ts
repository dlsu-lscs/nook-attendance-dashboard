export const getOfficerAttendance = async () => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/attendance/officer`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error: any) {
    console.log("Error: " + error);
  }
};

export const getActiveOfficers = async () => {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/attendance/officer/active`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error: any) {
    console.log("Error: " + error);
  }
};

export const getComitteeAttendance = async () => {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/attendance/committee`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error: any) {
    console.log("Error: " + error);
  }
};
