export const getOfficerAttendance = async () => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/officer/attendance`)

    return await response.json()
  } catch (error: any) {
    console.log('Error: ' + error)
  }
}
