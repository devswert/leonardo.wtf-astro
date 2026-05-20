import { useState } from "react";
import JobBox, { type JobBoxProps } from "./JobBox.tsx";

export type JobListItem = Omit<JobBoxProps, "isOpen" | "onToggle"> & {
  id: string;
};

interface JobExperienceListProps {
  jobs: JobListItem[];
}

const JobExperienceList = ({ jobs }: JobExperienceListProps) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      {jobs.map((job) => (
        <JobBox
          key={job.id}
          company={job.company}
          position={job.position}
          timeFrame={job.timeFrame}
          description={job.description}
          tools={job.tools}
          isOpen={openId === job.id}
          onToggle={() =>
            setOpenId((current) => (current === job.id ? null : job.id))
          }
        />
      ))}
    </>
  );
};

export default JobExperienceList;
