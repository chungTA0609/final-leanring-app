import { mdiStarOutline } from "@mdi/js";
import Icon from "@mdi/react";

const RatingComponent = ({ rating }: { rating: number }) => {
  const voted = Array.from({ length: Math.floor(rating) }, (_, index) => (
    <Icon key={index} path={mdiStarOutline} size={1} className="text-warning" />
  ));
  const notVoted = Array.from(
    { length: 5 - Math.floor(rating) },
    (_, index) => <Icon key={index} path={mdiStarOutline} size={1} />
  );

  return (
    <p className="text-muted mr-3 font-16">
      {voted}
      {notVoted}
    </p>
  );
};
export default RatingComponent;
