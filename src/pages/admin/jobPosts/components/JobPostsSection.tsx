import JobCard from "@/components/shared/JobCard";
import { useState, useEffect } from "react";
import { Job } from "@/types/job";

function JobPost() {
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
    <section className="py-8">
      <h2 className="text-white text-3xl">Current Job Postings</h2>

      <div className="mt-4 flex flex-col gap-y-4 text-black">
        {jobs.map((job) => {
          return (
            <JobCard
              key={job._id}
              title={job.title}
              location={job.location}
              _id={job._id}
              isAdmin={true}
              type={job.type}
            />
          );
        })}
      </div>
    </section>
  );
}

export default JobPost;
