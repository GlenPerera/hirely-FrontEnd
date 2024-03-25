import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { createJob } from "@/lib/services/api/jobs";

const CreateJob = () => {
  const [formData, setFormData] = useState({
    title: " ",
    description: " ",
    type: " ",
    location: " ",
    q1: " ",
    q2: " ",
    q3: " ",
  });

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createJob({
      title: formData.title,
      type: formData.type,
      description: formData.description,
      location: formData.location,
      questions: [formData.q1, formData.q2, formData.q3],
    });
  };
  return (
    <div>
      <div className="text-white text-3xl font-bold">Create a Job Posting</div>
      <form action="" className="py-8" onSubmit={handleSubmit}>
        <div>
          <h3 className="text-white text-lg">Title</h3>
          <Input
            className="mt-2"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-4">
          <h3 className="text-white">Description</h3>
          <Textarea
            className="mt-2"
            name={"description"}
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-4">
          <h3 className="text-white">Type</h3>
          <Input
            className="mt-2"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />

          <div className="mt-4">
            <h3 className="text-white">Location</h3>
            <Input
              className="mt-2"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4">
            <h3 className="text-white">Question 1</h3>
            <Textarea
              className="mt-2"
              name={"q1"}
              value={formData.q1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4">
            <h3 className="text-white">Question 2</h3>
            <Textarea
              className="mt-2"
              name={"q2"}
              value={formData.q2}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4">
            <h3 className="text-white">Question 3</h3>
            <Textarea
              className="mt-2"
              name={"q3"}
              value={formData.q3}
              onChange={handleChange}
              required
            />
          </div>

          <Button
            type="submit"
            className="mt-8 bg-card text-card-foreground bg-[yellow] text-black hover:bg-[#eded1d]"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateJob;
