// TODO: 
// - Pull the id from the url params list to render the correct bot
// - If there are no robots, navigate the user back to the home page "/"

import { useContext } from 'react';
import RobotContext from '../context/RobotContext';
import NotFoundPage from '../pages/NotFoundPage';

const BotSpecs = () => {
  const { robots } = useContext(RobotContext);

  // TIP: remember that the `id` from the URL is a string
  // here we are hard-coding the id. How can you get it from the URL?

  const id = 1
  const bot = robots.find((robot) => robot.id === id)
  if (!bot) return <NotFoundPage />

  const botClassIcon = (bot_class) => {
    switch (bot_class) {
      case "Assault":
        return <i className="icon military" />;
      case "Defender":
        return <i className="icon shield" />;
      case "Support":
        return <i className="icon ambulance" />;
      default:
        return <div />;
    }
  }

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt={bot.name}
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            <strong>
              Class: {bot.bot_class} {botClassIcon(bot.bot_class)}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot.armor}</strong>
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
