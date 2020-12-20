<?php


class Doctor
{
    private int $id;
    private string $name;
    private string $gender;
    private string $email;
    private string $password;
    private string $phone;
    private string $fbLink;
    private string $nationalId;
    private string $personalPicture;
    private string $clinicName;
    private string $clinicAddress;
    private string $specializationName;

    /**
     * Doctor constructor.
     * @param int $id
     * @param String $name
     * @param String $gender
     * @param String $email
     * @param String $password
     * @param String $phone
     * @param String $fbLink
     * @param String $nationalId
     * @param String $personalPicture
     * @param String $clinicName
     * @param String $clinicAddress
     * @param String $specializationName
     */
    public function __construct(int $id, string $name, string $gender, string $email, string $password, string $phone, string $fbLink, string $nationalId, string $personalPicture, string $clinicName, string $clinicAddress, string $specializationName)
    {
        $this->id = $id;
        $this->name = $name;
        $this->gender = $gender;
        $this->email = $email;
        $this->password = $password;
        $this->phone = $phone;
        $this->fbLink = $fbLink;
        $this->nationalId = $nationalId;
        $this->personalPicture = $personalPicture;
        $this->clinicName = $clinicName;
        $this->clinicAddress = $clinicAddress;
        $this->specializationName = $specializationName;
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @return String
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return String
     */
    public function getGender(): string
    {
        return $this->gender;
    }

    /**
     * @return String
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @return String
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * @return String
     */
    public function getPhone(): string
    {
        return $this->phone;
    }

    /**
     * @return String
     */
    public function getFbLink(): string
    {
        return $this->fbLink;
    }

    /**
     * @return String
     */
    public function getNationalId(): string
    {
        return $this->nationalId;
    }

    /**
     * @return String
     */
    public function getPersonalPicture(): string
    {
        return $this->personalPicture;
    }

    /**
     * @return String
     */
    public function getClinicName(): string
    {
        return $this->clinicName;
    }

    /**
     * @return String
     */
    public function getClinicAddress(): string
    {
        return $this->clinicAddress;
    }

    /**
     * @return String
     */
    public function getSpecializationName(): string
    {
        return $this->specializationName;
    }

    /**
     * @param String $specializationName
     */
    public function setSpecializationName(string $specializationName): void
    {
        $this->specializationName = $specializationName;
    }


}