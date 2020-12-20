<?php


class Disease
{
    private int $id;
    private string $name;
    private int $specializationID;

    /**
     * Disease constructor.
     * @param int $id
     * @param String $name
     * @param int $specializationID
     */
    public function __construct(int $id, string $name, int $specializationID)
    {
        $this->id = $id;
        $this->name = $name;
        $this->specializationID = $specializationID;
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
     * @return int
     */
    public function getSpecializationID(): int
    {
        return $this->specializationID;
    }


}