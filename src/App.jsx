import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import TabIndicator from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'

function App() {
  return (
    <>
      <Typography variant="h2" color="text.secondary">Test theme customizing</Typography>
      <TabIndicator />
      <div> huylongdev </div>
      <Button variant="contained">Hello world</Button>
      <AccessAlarmIcon />
      <ThreeDRotation />
    </>
  );
}

export default App;
