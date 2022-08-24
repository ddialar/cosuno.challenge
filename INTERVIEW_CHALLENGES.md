## Exec 3

[Solution](https://javarevisited.blogspot.com/2020/05/self-join-example-sql-query-to-find-employee-more-than-managers-leetcode-solution.html)

The Employee table holds all employees including their managers. Every employee has an Id, and there is also a column for the manager Id.

+----+-------+--------+-----------+
| Id | Name  | Salary | ManagerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | NULL      |
| 4  | Max   | 90000  | NULL      |
+----+-------+--------+-----------+
Given the Employee table, write a SQL query in query.sql that finds out the names of the employees who earn more than their managers. For the above table, Joe is the only employee who earns more than his manager.

```sql
-- Add your query here
select AnalyzedEmployee.Name
from (
  select Id, Name, Salary, ManagerId
  from Employee
  where ManagedId <> NULL
) as AnalyzedEmployee
inner join (
  select Id, Name, Salary
  from Employee
  where ManagedId = NULL
) as AnalyzedManager
on
  AnalyzedEmployee.ManagerId = AnalyzedManager.Id
WHERE
  AnalyzedEmployee.Salary > AnalyzedManager.Salary;
```
```js
// index.test.js
import alasql from "alasql";

import solution from "./query.sql";

test("gives correct results", () => {
  const db = new alasql.Database();

  db.exec(
    "CREATE TABLE Employee (Id INT, Name VARCHAR(255), Salary INT, ManagerId INT NULL)"
  );

  db.tables.Employee.data = [
    { Id: 1, Name: "Joe", Salary: 70000, ManagerId: 3 },
    { Id: 2, Name: "Henry", Salary: 80000, ManagerId: 4 },
    { Id: 3, Name: "Sam", Salary: 60000 },
    { Id: 4, Name: "Max", Salary: 90000 }
  ];

  const result = db.exec(solution);

  expect(result).toEqual([
    {
      Name: "Joe"
    }
  ]);
});
```

## Exec 4

[Solution](https://leetcode.com/problems/palindrome-number/solution/#:~:text=Given%20an%20integer%20x%20%2C%20return,palindrome%20while%20123%20is%20not.)

Given an integer x, return true if x is a palindrome integer. Implement this function in src/index.js.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Example 1:

Input: x = 121
Output: true
      
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
      
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
      
Example 4:

Input: x = -101
Output: false
      
 

Constraints:

-231 <= x <= 231 - 1

```js
// index.js
/**
 * @param {number} x
 * @return {boolean}
 */
export const isPalindrome = (x) => {
  return true;
};
```

```js
// index.test.js
import { isPalindrome } from "./index";

describe("isPalindrome", () => {
  it("returns true for 121", () => {
    expect(isPalindrome(121)).toBe(true);
  });

  it("returns true for 1221", () => {
    expect(isPalindrome(1221)).toBe(true);
  });

  it("returns false for -121", () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  it("returns false for 10", () => {
    expect(isPalindrome(10)).toBe(false);
  });

  it("returns false for -101", () => {
    expect(isPalindrome(-101)).toBe(false);
  });
});

```

## Exec 5

[Solution](https://redquark.org/leetcode/0013-roman-to-integer/#:~:text=Roman%20numerals%20are%20represented%20by,%2C%20C%20%2C%20D%20and%20M%20.&text=For%20example%2C%202%20is%20written,is%20XX%20%2B%20V%20%2B%20II.)

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol	Value
I       1
V       5
X       10
L       50
C       100
D       500
M       1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. To do this, implement the function in src/index.js.

 

Example 1:

Input: s = "III"
Output: 3
		
Example 2:

Input: s = "IV"
Output: 4
		
Example 3:

Input: s = "IX"
Output: 9
		
Example 4:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
		
Example 5:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
		
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

```js
// index.js
/**
 * @param {string} romanNumeral
 * @return {number}
 */

export const romanToInt = (romanNumeral) => {
  return 0;
};
```
```js
// index.test.js
import { romanToInt } from "./index";

test("converts roman numerals to integers", () => {
  expect(romanToInt("III")).toBe(3);
  expect(romanToInt("IV")).toBe(4);
  expect(romanToInt("IX")).toBe(9);
  expect(romanToInt("LVIII")).toBe(58);
  expect(romanToInt("MCMXCIV")).toBe(1994);
});
```