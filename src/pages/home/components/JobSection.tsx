import JobCard from "@/components/shared/JobCard";
import { useState, useEffect } from "react";
import { Job } from "@/types/job";

function JobSection() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("http://localhost:8000/jobs", {
        method: "GET",
      });
      const data: Job[] = await res.json();
      return data;
    };
    fetchJobs().then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <br />
      <br />
      <h2 className="text-white text-2xl font-bold">Available Jobs</h2>

      <div className="mt-4 flex flex-col gap-y-8 ">
        {jobs.map((job) => {
          return (
            <JobCard
              key={job._id}
              title={job.title}
              type={job.type}
              location={job.location}
              _id={job._id}
              isAdmin={false}
            />
          );
        })}
      </div>
    </div>
  );
}

export default JobSection;
