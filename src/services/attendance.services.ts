export const getOfficerAttendance = async () => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/attendance/officer`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data.data
  } catch (error: any) {
    console.log('Error: ' + error)
  }
}
