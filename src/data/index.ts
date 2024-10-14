import {
  directors,
  GovtProjects,
  HealthProjects,
  jobClassification,
  jobs,
  LivelihoodProjects,
  regions,
  Newsletters,
  donationListings,
  AnnualReports,
} from "../constants";
import axios from "../axios/index";

export async function getDirectors() {
  return directors;
}

export async function getDirector(id: number) {
  let director = directors.find((director) => director.id === id);
  return director ?? null;
}

export async function getHealthProject(id: number) {
  let project = HealthProjects.find((project) => project.id === id);
  return project ?? null;
}

export async function getGovernanceProject(id: number) {
  let project = GovtProjects.find((project) => project.id === id);
  return project ?? null;
}

export async function getJobClassification() {
  return jobClassification;
}

export async function getJobs() {
  const reversedJobs = jobs.sort((a, b) => b.id - a.id);
  console.log(reversedJobs);
  return reversedJobs;
}

export async function getRegions() {
  return regions;
}

export async function getLivelihoodProject(id: number) {
  let project = LivelihoodProjects.find((project) => project.id === id);
  return project ?? null;
}

export async function getNewsLetters() {
  // const newsletters = await axios.get("/newsletters");
  // console.log("Newsletters:", newsletters);
  Newsletters.sort((a, b) => b.id - a.id);
  return Newsletters;
}

export async function getAnnualReports() {
  return AnnualReports;
}

export async function getDonationDetails(id: number) {
  let donation = donationListings.find((donation) => donation.id === id);
  return donation ?? null;
}
