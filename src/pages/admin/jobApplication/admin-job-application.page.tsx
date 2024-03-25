import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Job } from "@/types/job";

const JobApplication = () => {
  const [jobApplication, setJobApplication] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("http://localhost:8000/jobapplications", {
        method: "GET",
      });

      const data: Job[] = await res.json();
      return data;
    };
    fetchJobs().then((data) => setJobApplication(data));
  }, []);

  return (
    <div className="flex flex-col gap-y-4">
      {jobApplication.map((job) => (
        <div key={job._id}>
          <Card className="bg-foreground bg-[yellow] border-none">
            <CardHeader className="flex-row items-center gap-x-4">
              <CardTitle className="text-black">{job.fullName}</CardTitle>
              <Badge
                className={cn({
                  "bg-red-500": job.rating?.toLocaleLowerCase() === "bad",
                  "bg-orange-400":
                    job.rating?.toLocaleLowerCase() === "moderate",
                  "bg-teal-500": job.rating?.toLocaleLowerCase() === "good",
                })}
              >
                {job.rating}
              </Badge>
            </CardHeader>
          </Card>
          <br />

          <Card className="p-4 bg-[#77dd77] border-none">
            {job.answers.map((answer, i) => (
              <p key={i}>Answers: {answer}</p>
            ))}
          </Card>
        </div>
      ))}
      <div>
        <Button variant="link" className="bg-[yellow]" asChild>
          <Link to={"/admin/jobs"}>Back</Link>
        </Button>
      </div>
    </div>
  );
};

export default JobApplication;
