pragma solidity ^0.8.0;

contract StudentRecords {
    struct Student {
        uint256 id;
        string name;
        string surname;
        uint256 GPAX;
        bool flag;
    }

    mapping(uint256 => Student) private students;
    uint256[] private studentIds;
    uint256 private counter;

    constructor() {
        counter = 1;
    }

    function insertStudent(
        string memory _name,
        string memory _surname,
        uint256 _GPAX
    ) public {
        students[counter] = Student(counter, _name, _surname, _GPAX, true);
        studentIds.push(counter);
        counter++;
    }

    function updateStudent(
        uint256 _id,
        string memory _name,
        string memory _surname,
        uint256 _GPAX
    ) public {
        require(students[_id].id != 0, "Student ID does not exist.");
        students[_id].name = _name;
        students[_id].surname = _surname;
        students[_id].GPAX = _GPAX;
    }

    function deleteStudent(uint256 _id) public {
        require(students[_id].id != 0, "Student ID does not exist.");
        students[_id].flag = false;
    }

    function searchById(uint256 _id) public view returns (Student memory) {
        require(students[_id].id != 0, "Student ID does not exist.");
        return students[_id];
    }

    function getAllRecords() public view returns (Student[] memory) {
        Student[] memory allStudents = new Student[](studentIds.length);
        for (uint256 i = 0; i < studentIds.length; i++) {
            if (students[studentIds[i]].flag != false) {
                allStudents[i] = students[studentIds[i]];
            } else {
                allStudents[i] = Student(0, "Deleted", "Deleted", 0, false);
            }
        }
        return allStudents;
    }

}
