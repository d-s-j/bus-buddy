const ScheduleList = ({ buses }) => {
  return (
    <>
      <h3>Schedule:</h3>
      <ul>
        {buses.map(bus => (
          <li key={bus.RouteNo} className="route-container">
            <p className="route-title"><b>#{bus.RouteNo}</b> ( {bus.RouteName} )</p>
            <ul>
              {bus.Schedules.map((schedule, index) => (
                <li key={index}>
                  <p className="route-info">~ {schedule.ExpectedLeaveTime}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  )
};

export default ScheduleList;