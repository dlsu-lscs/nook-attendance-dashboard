export const getOfficerAttendance = async () => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/attendance/officer`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.data ?? [];
  } catch (error: unknown) {
    console.log("Error: " + error);
    return [];
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
    return data.data ?? [];
  } catch (error: unknown) {
    console.log("Error: " + error);
    return [];
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
    return data.data ?? [];
  } catch (error: unknown) {
    console.log("Error: " + error);
    return [];
  }
};
