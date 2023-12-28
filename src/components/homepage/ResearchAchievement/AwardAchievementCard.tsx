
type Props = {
    award: string,
    conference: string,
    year: string,
    link: string
}

function AwardAchievementCard({award, conference, year, link}: Props) {
  return (
    <div className="my-3">
        <div>
            <a href={link}>
                {award}
            </a>
        </div>
        <div className="text-gray-400 text-sm">
        <div>
            {conference}, {year}
        </div>
        </div>
    </div>
  );
}

export default AwardAchievementCard;