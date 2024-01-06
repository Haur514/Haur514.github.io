
type Props = {
    author: string,
    title: string,
    conference: string,
    year: string,
    link: string
}

function ConferenceAchievementCard({author, title, conference, year, link}: Props) {
  return (
    <div className="my-3">
        <div>
            <a href={link}>
                {title}
            </a>
        </div>
        <div className="text-gray-400 text-sm">
        <div>
            {author}
        </div>
        <div>
            {conference}, {year}
        </div>
        </div>
    </div>
  );
}

export default ConferenceAchievementCard;