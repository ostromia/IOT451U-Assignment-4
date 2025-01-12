*IOT451U - Fundamentals of Programming - 2024/25 - Assignment 4 - Final Project (Code and Report)*

# Assignment 4 - Final Project (Code and Report)

## Final Project and Report

__Deadline__: 14th, January 2025, 23:59

__Expected length__: 1000-2000 words

__Expected code length__: 100-500 lines

Please submit a zipped folder on the course QM Plus page, including:

- Your Code (including a .git folder if you have used version control)
- Documentation in PDF or Markdown format

Build a Collection Manager.

A collection manager will have the ability to view collection items, both individually and in bulk. You should be able to add additional items, remove them, and edit information about the item. You should also be able to group items into relevant categories, filtering on those categories.

You can choose the subject for collection, but you should produce clear requirements for the application based on this. You only need to choose one topic for the collection.

The collection is up to you, but may include:

- Books in the library
- Classrooms in the IoT building
- Posters on your walls
- Plants in your room
- Study groups at the IoT
- Outstanding tasks to complete
- Films to watch
- Birds in the Nature reserve

A collection manager is a type of data management system. It focuses on storing information about material or immaterial objects, as well as information connected to those objects. You may wish to store information about individuals related to the object (such as a book’s author) or transactions (such as a book’s withdrawal). The essential element is being able to view both individual records - representing information about individual objects - and summary statistics about all objects in a collection.

If you are having difficulty in choosing a topic, please reach out to an instructor.

Do not worry about choosing the ‘perfect’ topic; as long as it allows you to demonstrate your programming skills and knowledge, you will be fine.

## Initiation & Design

Your collection application should feature multiple classes (at least 3).

Examples might include:

- Author–Book–Genre
- Class–Classroom-Floor
- Poster–Wall–Room
- Room–Plant (Instance)– Plant (Type)
- Study Group Meeting – Study Group – Study Group Member
- Assignee – Task — Category
- Actor – Film – Genre
- Day – Bird Sighting – Bird Type

You can use more than three classes, and can demonstrate your knowledge of object oriented programming concepts, including:

- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

Please provide the following:

- Notes on the requirements for your design.
- This might include who the potential users are, what data needs to be held and used.

I would suggest creating ‘user stories’ in the format:

- As a `<Type of User>` I want to `<Do a thing in the system>` so I can `<Achieve a wider goal>`.

I would suggest creating ‘user personas’ also. These should represent imaginary users. For this application, you can base a user persona on yourself, but you should also think of other possible users, their needs and requirements. 2-3 is fine.

An overview of the system design.

You should use Unified Modelling Language or an equivalent.

Pseudocode and documentation is there to help you - it allows you to visualise your thought process and assumptions before coding. It is often a lot easier to change designs than it is to change code. A class diagram will be beneficial - you also may wish to create an entity relationship diagram if you are representing how data will be stored outside of the application.

A design for an accessible user interface.

A command line application is acceptable, but you should think about how information is presented.

For a visual user interface, you can use a prototyping tool to ‘mock up’ the application. For a textual user interface, you can show the textual prompts or menus.

You do not need to get these things right the first time, and it is helpful if you can show an iterative approach. You can also suggest future improvements or modifications.

An iterative approach means that you show the progressive versions of your application. If there are things that you are not able to do in this version, that is fine.

## Implementation

You should produce a prototype implementation of your collection application.

You may use an existing dataset or produce your own dataset. Note that the second option is probably easier - if you use an existing dataset, you will have to convert it to work with your application. Test or dummy data is fine, but the application should be able to load the data from CSV and JSON.

A dataset will often just be the data used to instantiate a number of objects based on the classes you have created.

The application should provide the ability to view individual collection records.

This form view should allow the user to modify information about the individual record.

A record will be an individual object or instance of a class.

It should also be possible to view information about the collection as a whole, broken down by appropriate category.

This should involve data visualisation techniques, including charts, pivot tables or a dashboard.

Note that it is possible to produce pivot tables in a command line interface - this would be just summary data about all the objects in your collection, as opposed to individual.

Work on the development of your application should be properly documented and changes should be tracked through the use of a version control system.

The easiest way to do this is to either fork and clone the repository, or do ‘git init’ in an existing folder in your environment. This can be done in a terminal. Then, as you make changes to your code, type `git add .` and `git commit -m <message>`, with the message representing the changes you have made. You don’t need to worry about using branches or pushing the changes to Github for now.

## Reflection and Debugging

Test the functionality of your application.

This can involve automated or manual testing.

Automated tests will require you to figure out what your functions should return, and create tests using a relevant testing library. Alternatively, you can manually test individual functions, and record the results in your report.

Acceptance testing will involve checking the requirements you set out, and seeing which requirements have been met.

Document and discuss the issues that arose while developing your solution, any missed requirements or future opportunities.

While you have a lot of other things to include in your report, it is useful to leave some space for reflection. This can include considerations of what worked, what wasn’t effective, and how you might take your learning from the project forward into future projects.

See the following guide from Queen Mary library on information literacy:

- [Find It! Use It! Reference It! QMUL Information Literacy Skills](https://qmplus.qmul.ac.uk/course/view.php?id=6819)

You should use the Harvard Referencing style:

- [Cite them Right - Harvard Referencing Style](https://www.citethemrightonline.com/category-list?docid=CTRHarvard)

Please also review the Queen Mary Elevate guides on academic communication:

- [QM Elevate](https://www.qmul.ac.uk/sllf/language-centre/qm-elevate/academic--professional-communicationmodules/)

## Rubric

IOT451U Final Assignment Mark Scheme

### Requirements Analysis and Presentation (7)

| Marks | Description                                                   |
|-------|---------------------------------------------------------------|
| 0     | No attempt.                                                   |
| 1     | Incomplete or poorly documented requirements.                 |
| 3     | Reasonable presentation of requirements.                      |
| 5     | Highly effective and thoughtful presentation of requirements. |

### System Design (7)

| Marks | Description                                                                 |
|-------|-----------------------------------------------------------------------------|
| 0     | No attempt.                                                                 |
| 1     | Incomplete or poorly documented class and/or data structure.                |
| 3     | Effective use of classes and data structures.                               |
| 5     | Advanced system design making excellent use of data structures and classes. |

### Interaction Design (7)

| Marks | Description                                                         |
|-------|---------------------------------------------------------------------|
| 0     | No attempt.                                                         |
| 1     | Incomplete or poorly documented design for interactions.            |
| 3     | Effective interaction design, showing attention to user experience. |
| 5     | Advanced interaction design, prioritising accessibility.            |

### Implementation - Individual Records (7)

| Marks | Description                                                                     |
|-------|---------------------------------------------------------------------------------|
| 0     | No attempt.                                                                     |
| 1     | Incomplete or poorly documented design for interacting with individual records. |
| 3     | Effective structure for creating and manipulating individual records.           |
| 5     | Advanced implementation for manipulation of individual records.                 |

### Implementation - Analysis of Collection (7)

| Marks | Description                                                      |
|-------|------------------------------------------------------------------|
| 0     | No attempt.                                                      |
| 1     | Incomplete or poorly documented approach to collection analysis. |
| 3     | Effective collection analysis including visualisations.          |
| 5     | Advanced implementation of collection analysis.                  |

### Documentation (8)

| Marks | Description                                                       |
|-------|-------------------------------------------------------------------|
| 0     | No attempt.                                                       |
| 1     | Incomplete or limited use of documentation or version management. |
| 3     | Effective use of documentation and version management.            |
| 5     | Advanced documentation and use of version management.             |

### Testing (7)

| Marks | Description                                     |
|-------|-------------------------------------------------|
| 0     | No attempt.                                     |
| 1     | Incomplete or limited documentation of testing. |
| 3     | Effective use of manual or unit testing.        |
| 5     | Advanced use of testing and documentation.      |
