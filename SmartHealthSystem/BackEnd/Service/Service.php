<?php

require_once 'BackEnd/Dao/Dao.php';
 
class Service
{

    /**
     * Service constructor.
     */
    public function __construct()
    {
        $dao = new Dao();
    }

    public function signupAsDoctor($doctor)
    {

    }

    public function signInAsDoctor($email, $password)
    {

    }

    public function getDoctorData($docId)
    {

    }

    public function editDoctorData($docId, $doctor)
    {

    }

    public function deleteDoctorAccountById($docId)
    {

    }

    public function getMatchingDiseasesBySymptomsKeywords($symptomsKeywords)
    {

    }

    public function getSpecializedDoctors($diseases)
    {

    }
    
}
