export interface Experience {
  company: string;
  period: string;
  roleKey: string;
  locationKey: string;
  descriptionKey: string;
}

export const experiences: Experience[] = [
  {
    company: "Agentic Dream",
    period: "Jun 2023 - Dec 2025",
    roleKey: "experience.agentic.role",
    locationKey: "experience.agentic.location",
    descriptionKey: "experience.agentic.description",
  },
  {
    company: "SensorData",
    period: "Mar 2023 - Aug 2023",
    roleKey: "experience.sensordata.role",
    locationKey: "experience.sensordata.location",
    descriptionKey: "experience.sensordata.description",
  },
  {
    company: "Basspago",
    period: "Aug 2022 - May 2023",
    roleKey: "experience.basspago.role",
    locationKey: "experience.basspago.location",
    descriptionKey: "experience.basspago.description",
  },
  {
    company: "Elastic Dev Team",
    period: "Feb 2021 - Aug 2022",
    roleKey: "experience.elastic.role",
    locationKey: "experience.elastic.location",
    descriptionKey: "experience.elastic.description",
  },
];
