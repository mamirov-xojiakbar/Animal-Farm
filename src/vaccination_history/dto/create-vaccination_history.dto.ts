export class CreateVaccinationHistoryDto {
    animal_id: string
    vaccine_id: string
    vaccinated_date: Date
    next_vaccination_date: Date
    worker_id: string
}
