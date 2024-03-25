import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type jobCardProps = {
  _id: string;
  title: string;
  type: string;
  location: string;
  isAdmin: boolean;
};

function JobCard(props: jobCardProps) {
  return (
    <Link
      to={props.isAdmin ? `/admin/job/${props._id}` : `/job/${props._id}`}
      className="block"
    >
      <div className=" text-white">
        <Card className="bg-[yellow] border-none">
          <CardHeader>
            <CardTitle>{props.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-row gap-8">
              <li>📌{props.type}</li>
              <li>🔖{props.location}</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="hover:bg-[#b9b239]">Apply Now!!</Button>
          </CardFooter>
        </Card>
        <br />
      </div>
    </Link>
  );
}

export default JobCard;
