// TODO: 
// - Pull the id from the url params list to render the correct bot
// - If there are no robots, navigate the user back to the home page "/"

import NotFoundPage from '../pages/NotFoundPage';
import CouldNotLoadData from './CouldNotLoadData';
import BotClassIcon from './BotClassIcon';
import { getRobotById } from '../adapters/robotAdapters';
import { useState, useEffect } from 'react';

const BotSpecs = () => {
  // TIP: remember that the `id` from the URL is a string
  const id = '???'

  const [robot, setRobot] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchRobot = async () => {
      const [data, error] = await getRobotById(id);
      if (data) setRobot(data);
      if (error) setError(error);
    }
    fetchRobot();
  }, [id]);

  if (error) return <CouldNotLoadData />;
  if (!robot) return <NotFoundPage />

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt={robot.name}
              className="ui medium circular image bordered"
              src={robot.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {robot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {robot.catchphrase}
            </p>
            <strong>
              Class: {robot.bot_class} {BotClassIcon(robot.bot_class)}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{robot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{robot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{robot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BotSpecs;
