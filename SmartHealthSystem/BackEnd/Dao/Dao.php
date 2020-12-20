<?php
require_once 'BackEnd/Models/Doctor.php';
require_once 'BackEnd/Models/Disease.php';

class Dao
{

    /**
     * Dao constructor.
     */
    public function __construct()
    {
    }

    public function insetDoctor(Doctor $doctor): bool
    {

    }

    public function deleteDoctorById(int $id): bool
    {

    }

    public function updateDoctorById(int $id, Doctor $doctor): bool
    {

    }

    public function getDoctorById(int $id): Doctor
    {

    }

    public function isDoctorFoundByEmail(string $email): bool
    {

    }

    public function isDoctorFoundByEmailByPassword(string $email, string $password): bool
    {

    }

    public function getSpecializationNameById(int $specId): string
    {

    }

    public function getAllDoctorsByIds(array $doctors): array
    {

    }

    public function getAllDoctorsIdsBySpecializationIds(array $specIds): array
    {

    }

    public function getAllDiseasesByIds(array $diseasesId): array
    {

    }

    public function getAllMatchingDiseaseIdsBySymptoms(array $symptomsIds): array
    {

    }

    public function getAllSymptomsIdsBySearchKeys(array $keys): array
    {

    }


}