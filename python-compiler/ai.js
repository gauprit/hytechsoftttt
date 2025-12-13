/* =========================================
   PYTHON AI ASSISTANT (NO API, FREE)
   Hyquantix Technologies
========================================= */
/* =============================
   AI CONTEXT MEMORY (LOCAL)
============================= */
/* =============================
   AI CONTEXT MEMORY (LOCAL)
============================= */

let aiContext = {
  topic: null,        // e.g. "list_vs_tuple"
  subtopic: null,     // e.g. "performance"
  mode: "teaching",
  lastQuestion: null    // teaching | interview | practice
};


function setContext(topic) {
  aiContext.topic = topic;
}



let aiPanel, aiInput, aiMessages;

document.addEventListener("DOMContentLoaded", () => {
  console.log("🤖 AI ready");

  aiPanel = document.getElementById("aiPanel");
  aiInput = document.getElementById("aiInput");
  aiMessages = document.getElementById("aiMessages");
});

/* Toggle Chat */
function toggleAI() {
  if (!aiPanel) return;

  aiPanel.classList.toggle("hidden");

  // Auto-focus input when opened
  if (!aiPanel.classList.contains("hidden")) {
    setTimeout(() => aiInput?.focus(), 100);
  }
}

/* Close on ESC */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && aiPanel && !aiPanel.classList.contains("hidden")) {
    toggleAI();
  }
});

/* Add message bubble */
function addMessage(text, type = "bot") {
  if (!aiMessages) return;

  const div = document.createElement("div");
  div.className = type === "user" ? "ai-user" : "ai-bot";
  div.innerHTML = text;
  aiMessages.appendChild(div);
  aiMessages.scrollTop = aiMessages.scrollHeight;
}

/* Main Ask Function */
function askAI() {
  if (!aiInput) return;

  const question = aiInput.value.trim();
  if (!question) return;

  addMessage(question, "user");
  aiInput.value = "";

  const typingDiv = document.createElement("div");
  typingDiv.className = "ai-bot ai-typing";
  typingDiv.textContent = "🤖 AI is thinking...";
  aiMessages.appendChild(typingDiv);
  aiMessages.scrollTop = aiMessages.scrollHeight;

  setTimeout(() => {
    typingDiv.remove();
    const response = getAIResponse(question.toLowerCase());
    addMessage(response, "bot");
  }, 700);
}
function setContext(topic, subtopic = null, mode = "teaching") {
  aiContext.topic = topic;
  aiContext.subtopic = subtopic;
  aiContext.mode = mode;
}

/* =============================
   CONTEXT-AWARE FOLLOW UPS
============================= */

// Follow-up: performance / faster / slower

/* =========================================
   INTELLIGENT RESPONSE ENGINE
========================================= */
function getAIResponse(q) {
  const code = typeof editor !== "undefined" ? editor.getValue() : "";

  /* =============================
     PYTHON BASICS
  ============================= */

  if (q.includes("what is python")) {
    return `
<b>Python</b> is a high-level, interpreted programming language
known for its simplicity and readability.

✔ Easy to learn
✔ Cross-platform
✔ Widely used in AI, Web, Data Science
`;
  }
if (
  (q.includes("faster") || q.includes("slower") || q.includes("performance")) &&
  aiContext.topic === "list_vs_tuple"
) {
  return `
<b>⚡ Performance: List vs Tuple</b><br><br>

<b>Tuple is faster than List</b> because:<br>
• Immutable (cannot change)<br>
• Less memory overhead<br>
• Faster iteration<br><br>

<b>Use Tuple when:</b><br>
• Data should not change<br>
• Performance is critical<br><br>

<b>Use List when:</b><br>
• You need to modify data
`;
}
if (
  (q.includes("memory") || q.includes("space")) &&
  aiContext.topic === "list_vs_tuple"
) {
  return `
<b>🧠 Memory Usage: List vs Tuple</b><br><br>

<b>Tuple uses less memory</b> because:<br>
• Fixed size<br>
• No resizing overhead<br><br>

<b>Interview Tip:</b><br>
👉 Tuples are preferred for constants
`;
}


  if (q.includes("print")) {
    return `
<b>print()</b> displays output on the screen.

<pre>print("Hello World")</pre>
`;
  }

  if (q.includes("variable")) {
    return `
<b>Variable</b> stores data in memory.

<pre>x = 10
name = "Python"</pre>
`;
  }

  /* =============================
     DATA TYPES
  ============================= */
if (q.includes("list vs array")) {
  return `
<b>🎯 List vs Array (Interview)</b><br><br>

<b>Python List</b><br>
• Can store <b>different data types</b><br>
• Dynamic size<br>
• Built-in data structure<br>
• Slower than array<br>

<pre>
nums = [1, "two", 3.0]
</pre>

<b>Array (array module / numpy)</b><br>
• Stores <b>same data type only</b><br>
• Faster & memory efficient<br>
• Used in numerical computation<br>

<pre>
import array
arr = array.array('i', [1, 2, 3])
</pre>

<b>Interview Answer:</b><br>
👉 Use <b>list</b> for general purpose programming  
👉 Use <b>array</b> for performance & math operations
`;
}
if (q.includes("time complexity") || q.includes("list complexity")) {
  return `
<b>⏱ Time Complexity of List Operations</b><br><br>

<b>Access by index:</b><br>
• nums[i] → <b>O(1)</b>

<b>append()</b><br>
• Adds at end → <b>O(1)</b>

<b>pop()</b><br>
• pop() → <b>O(1)</b><br>
• pop(index) → <b>O(n)</b>

<b>insert()</b><br>
• insert at index → <b>O(n)</b>

<b>remove()</b><br>
• Search + shift → <b>O(n)</b>

<b>search (in)</b><br>
• x in list → <b>O(n)</b>

<b>sort()</b><br>
• TimSort → <b>O(n log n)</b>

<b>Summary Table:</b>
<pre>
append      → O(1)
pop()       → O(1)
insert      → O(n)
remove      → O(n)
search      → O(n)
sort        → O(n log n)
</pre>

<b>Interview Tip:</b><br>
👉 Avoid insert/remove in large lists
`;
}

  if (q.includes("data type")) {
    return `
<b>Common Python Data Types</b><br>
• int → 10<br>
• float → 10.5<br>
• str → "hello"<br>
• bool → True / False<br>
• list → [1,2,3]<br>
• tuple → (1,2)<br>
• dict → {"a":1}
`;
  }


if (q.includes("while loop")) {
  return `
<b>🔄 while loop in Python</b><br><br>

A <b>while loop</b> runs as long as the condition is True.

<b>Basic Syntax:</b>
<pre>
i = 0
while i < 5:
    print(i)
    i += 1
</pre>

<b>⚠ Common Mistake:</b><br>
• Forgetting to update condition → Infinite loop

<b>Best Practice:</b><br>
• Always ensure loop condition will eventually become False
`;
}
if (q.includes("if else") || q.includes("if statement")) {
  return `
<b>🔀 if / else Statement</b><br><br>

Used for decision making.

<b>Syntax:</b>
<pre>
age = 18
if age >= 18:
    print("Adult")
else:
    print("Minor")
</pre>

<b>elif example:</b>
<pre>
if marks > 90:
    print("A")
elif marks > 70:
    print("B")
else:
    print("C")
</pre>
`;
}

  /* =============================
     CONDITIONALS
  ============================= */

  if (q.includes("if statement")) {
    return `
<b>If Statement</b> controls decision making.

<pre>if age >= 18:
    print("Adult")
else:
    print("Minor")</pre>
`;
  }

  /* =============================
     FUNCTIONS
  ============================= */

if (
  q.includes("function") &&
  aiContext.topic !== "dictionary"
) {
  setContext("function");
  return `
<b>🔧 Function</b><br><br>

A function is a reusable block of code.

<pre>
def add(a, b):
    return a + b
</pre>
`;
}


  if (q.includes("lambda")) {
    return `
<b>Lambda Function</b>in Python is a small, anonymous function defined using the lambda keyword. Unlike regular functions defined with the def keyword, lambda functions are typically used for short, immediate operations and can only contain a single expression.

<pre>add = lambda a, b: a + b</pre>

<pre># A lambda function that adds 10 
add_ten = lambda a: a + 10
print(add_ten(5)) # Output: 15</pre>
`;
  }
  if (q.includes("\\n") || q.includes("new line")) {
  return `
<b>\\n (New Line)</b> in Python is an escape character used to move the cursor to a new line within a string. It is commonly used while printing multiline output.

<pre>print("Hello\\nWorld")</pre>

<b>Output:</b>
<pre>Hello
World</pre>

<b>Usage:</b><br>
• Printing multiline text<br>
• Formatting output<br>
• Logs & console messages
`;
}
if (q.includes("<br>") || q.includes("html break")) {
  return `
<b>&lt;br&gt; (HTML Line Break)</b> is used in HTML to break lines on a webpage. It does NOT work inside Python code.

<pre>Hello&lt;br&gt;World</pre>

<b>Output on webpage:</b><br>
Hello<br>World

<b>Note:</b><br>
• Used only in HTML / browser<br>
• Not valid in Python console
`;
}
if (q.includes("\\t") || q.includes("tab")) {
  return `
<b>\\t (Tab Space)</b> is an escape character that inserts horizontal spacing, similar to pressing the Tab key.

<pre>print("Name\\tAge")
print("Alex\\t25")</pre>

<b>Output:</b>
<pre>Name    Age
Alex    25</pre>

<b>Used for:</b><br>
• Table formatting<br>
• Clean console output
`;
}
if (q.includes("backslash")) {
  return `
<b>\\\\ (Backslash)</b> is used to print a literal backslash in Python strings.

<pre>print("C:\\\\Users\\\\Admin")</pre>

<b>Output:</b>
<pre>C:\Users\Admin</pre>

<b>Why?</b><br>
• \\ is an escape character<br>
• Double \\ prints single \\
`;
}
if (q.includes("escape quote") || q.includes("quotes in string")) {
  return `
<b>Escaping Quotes</b> allows you to use quotes inside strings.

<pre>print("He said, \\"Hello\\"")</pre>

<b>Output:</b>
<pre>He said, "Hello"</pre>

<b>Alternative:</b>
<pre>print('He said, "Hello"')</pre>
`;
}
if (q.includes("raw string")) {
  return `
<b>Raw Strings</b> treat escape characters as normal text.

<pre>print(r"C:\\new\\test")</pre>

<b>Output:</b>
<pre>C:\\new\\test</pre>

<b>Used in:</b><br>
• File paths<br>
• Regular expressions
`;
}


  /* =============================
     DATA STRUCTURES
  ============================= */





  if (q.includes("set")) {
    return `
<b>A Set</b> in Python is a collection of unique, unordered elements. Sets are defined using curly braces {} or the set() function.

<pre>
fruits = {"apple", "banana"}
print(fruits)

numbers = set([1, 2, 3, 4])
print(numbers)
`;
  }




  /* =============================
     OOP
  ============================= */

  if (q.includes("class")) {
    return `
<b>Class</b> are stored in namespaces, which are mappings between names and objects. These namespaces are typically implemented as dictionaries. When a class is defined, it creates a new namespace to store its attributes, methods, and other definitions. Once the class definition is complete, the namespace is wrapped into a class object, which is then stored in the namespace where the class was defined.

<pre>class Person:
    def __init__(self, name):
        self.name = name</pre>
`;
  }

  if (q.includes("object")) {
    return `
<b>Object</b> is an instance of a class.

<pre>p = Person("John")</pre>
`;
  }

  if (q.includes("inheritance")) {
    return `
<b>Inheritance</b> allows a class to use another class.

<pre>class Child(Parent):
    pass</pre>
`;
  }

  /* =============================
     FILE HANDLING
  ============================= */

  if (q.includes("file")) {
    return `
<b>File Handling</b> is used to read/write files.

<pre>with open("data.txt") as f:
    print(f.read())</pre>
`;
  }

  /* =============================
     MODULES
  ============================= */


  /* =============================
   MODULES (ADVANCED)
============================= */

if (q.includes("module")) {
  return `
<b>📦 Python Modules</b><br><br>

A <b>module</b> is a file containing Python code (functions, variables, classes)
that can be reused in other programs.<br><br>

<b>🔹 Why use modules?</b><br>
• Code reuse<br>
• Better organization<br>
• Cleaner projects<br><br>

<b>🔹 Built-in Modules Example</b>
<pre>import math
print(math.sqrt(16))
print(math.pi)</pre>

<b>🔹 Import Specific Functions</b>
<pre>from math import sqrt, pi
print(sqrt(25))
print(pi)</pre>

<b>🔹 Import with Alias</b>
<pre>import math as m
print(m.sqrt(36))</pre>

<b>🔹 Create Your Own Module</b>
File: <b>my_module.py</b>
<pre>def greet(name):
    return "Hello " + name</pre>

Use it:
<pre>import my_module
print(my_module.greet("Alex"))</pre>

<b>🔹 __name__ == "__main__"</b>
Used to check if file is run directly:
<pre>if __name__ == "__main__":
    print("Executed directly")</pre>

<b>🔹 Popular Built-in Modules</b><br>
• math → math operations<br>
• random → random numbers<br>
• datetime → date & time<br>
• os → operating system<br>
• sys → system operations<br>

<b>💡 Best Practice</b><br>
• One module = one responsibility<br>
• Use meaningful names<br>
• Avoid wildcard imports (*)
`;
}


  /* =============================
     ERRORS & DEBUGGING
  ============================= */

  if (q.includes("error") || q.includes("exception")) {
    return `
<b>Common Errors</b><br>
• SyntaxError<br>
• IndentationError<br>
• NameError<br>
• TypeError<br><br>
Tip: Check indentation and colons (:)
`;
  }

  if (q.includes("try")) {
    return `
<b>Exception Handling</b>

<pre>try:
    x = 10/0
except ZeroDivisionError:
    print("Cannot divide")</pre>
`;
  }
  if (q.includes("package")) {
  return `
<b>📦 Python Package</b><br><br>

A <b>package</b> is a folder containing multiple modules.<br><br>

<b>Structure:</b>
<pre>
mypackage/
 ├─ __init__.py
 ├─ math_utils.py
 └─ string_utils.py
</pre>

<b>Import from package:</b>
<pre>from mypackage import math_utils
math_utils.add(2, 3)</pre>

<b>Difference:</b><br>
• Module → single .py file<br>
• Package → collection of modules
`;
}
if (q.includes("list comprehension")) {
  return `
<b>🧠 List Comprehension</b><br><br>

A short way to create lists.

<b>Normal:</b>
<pre>
nums = []
for i in range(5):
    nums.append(i*i)
</pre>

<b>Comprehension:</b>
<pre>
nums = [i*i for i in range(5)]
</pre>

✔ Cleaner  
✔ Faster  
✔ Pythonic
`;
}
if (q.includes("dict comprehension")) {
  return `
<b>📘 Dictionary Comprehension</b>

<pre>
squares = {x: x*x for x in range(5)}
</pre>

Result:
<pre>{0:0, 1:1, 2:4, 3:9, 4:16}</pre>
`;
}

if (q.includes("generator") || q.includes("yield")) {
  return `
<b>⚡ Generator</b><br><br>

Generators produce values one at a time using <b>yield</b>.

<pre>
def count_up(n):
    for i in range(n):
        yield i
</pre>

<b>Usage:</b>
<pre>
for num in count_up(3):
    print(num)
</pre>

✔ Memory efficient  
✔ Used for large data
`;
}
if (q.includes("decorator")) {
  return `
<b>🎁 Decorators</b><br><br>

Decorators modify functions without changing their code.

<pre>
def my_decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper

@my_decorator
def hello():
    print("Hello")
</pre>

Used in:
• Logging  
• Authentication  
• Timing functions
`;
}
if (q.includes("map") || q.includes("filter") || q.includes("reduce")) {
  return `
<b>🔁 map / filter / reduce</b><br><br>

<b>map()</b>
<pre>list(map(lambda x: x*2, [1,2,3]))</pre>

<b>filter()</b>
<pre>list(filter(lambda x: x>2, [1,2,3,4]))</pre>

<b>reduce()</b>
<pre>
from functools import reduce
reduce(lambda a,b: a+b, [1,2,3])
</pre>
`;
}
if (q.includes("file mode")) {
  return `
<b>📂 File Modes</b><br><br>

• r → read<br>
• w → write (overwrite)<br>
• a → append<br>
• x → create<br>
• rb → read binary<br>
• wb → write binary

<pre>
with open("file.txt", "w") as f:
    f.write("Hello")
</pre>
`;
}
if (q.includes("virtual environment") || q.includes("venv")) {
  return `
<b>🌱 Virtual Environment</b><br><br>

Isolates project dependencies.

<b>Create:</b>
<pre>python -m venv env</pre>

<b>Activate:</b>
Windows:
<pre>env\\Scripts\\activate</pre>

Linux/Mac:
<pre>source env/bin/activate</pre>

✔ Avoid dependency conflicts
`;
}
if (q.includes("interview")) {
  return `
<b>🎯 Common Python Interview Questions</b><br><br>

• List vs Tuple<br>
• Mutable vs Immutable<br>
• Shallow vs Deep Copy<br>
• *args and **kwargs<br>
• Decorators<br>
• GIL (Global Interpreter Lock)
`;
}
if (q.includes("project structure")) {
  return `
<b>🏗 Python Project Structure</b>

<pre>
project/
 ├─ app.py
 ├─ requirements.txt
 ├─ modules/
 │   └─ utils.py
 └─ tests/
</pre>

✔ Clean  
✔ Scalable  
✔ Professional
`;
}
if (q.includes("python interview")) {
  return `
<b>🎯 Top Python Interview Questions</b><br><br>

1️⃣ What is Python?<br>
2️⃣ Difference between list & tuple<br>
3️⃣ Mutable vs Immutable<br>
4️⃣ What are decorators?<br>
5️⃣ What is GIL?<br>
6️⃣ *args and **kwargs<br>
7️⃣ Shallow vs Deep copy<br>
8️⃣ What is virtual environment?<br>
9️⃣ What is __name__ == "__main__"?<br>
🔟 Python memory management

Ask any one to get explanation.
`;
}

if (q.includes("list vs tuple")) {
  setContext("list_vs_tuple");

  return `
<b>📊 List vs Tuple</b><br><br>

<b>List</b><br>
• Mutable (can change)<br>
• Slower<br>
• Uses []<br>

<pre>
nums = [1,2,3]
nums.append(4)
</pre>

<b>Tuple</b><br>
• Immutable (cannot change)<br>
• Faster<br>
• Uses ()<br>

<pre>
t = (1,2,3)
</pre>

👉 You can now ask:<br>
• Which one is faster?<br>
• Which uses less memory?<br>
• When should I use tuple?
`;
}


if (q.includes("mutable")) {
  return `
<b>🔄 Mutable vs Immutable</b><br><br>

<b>Mutable</b> (can change):<br>
• list<br>
• dict<br>
• set<br>

<b>Immutable</b> (cannot change):<br>
• int<br>
• float<br>
• string<br>
• tuple<br>

<pre>
x = 10
x = 20  # creates new object
</pre>
`;
}
if (q.includes("*args") || q.includes("**kwargs")) {
  return `
<b>⭐ *args and **kwargs</b><br><br>

<b>*args</b> → multiple positional arguments
<pre>
def add(*args):
    return sum(args)
</pre>

<b>**kwargs</b> → multiple keyword arguments
<pre>
def info(**kwargs):
    print(kwargs)
</pre>

Used when number of arguments is unknown.
`;
}
if (q.includes("gil")) {
  return `
<b>🧠 GIL (Global Interpreter Lock)</b><br><br>

GIL allows only <b>one thread</b> to execute Python bytecode at a time.

✔ Simplifies memory management  
❌ Limits multi-core CPU usage  

<b>Good for:</b> I/O-bound tasks  
<b>Bad for:</b> CPU-bound tasks  

Solution:
• multiprocessing
• async programming
`;
}

if (q.includes("__name__")) {
  return `
<b>🚀 __name__ == "__main__"</b><br><br>

Used to check if file is run directly.

<pre>
if __name__ == "__main__":
    main()
</pre>

✔ Prevents code from running on import  
✔ Used in real projects
`;
}
if (q.includes("memory management")) {
  return `
<b>🧠 Python Memory Management</b><br><br>

• Automatic memory allocation<br>
• Uses reference counting<br>
• Garbage collection removes unused objects<br>

<b>GC handles:</b><br>
• Circular references
`;
}
if (q.includes("scenario")) {
  return `
<b>🧩 Scenario-Based Questions</b><br><br>

• How to handle large files?<br>
→ Use generators

• How to speed up Python?<br>
→ Use C extensions, PyPy, multiprocessing

• How to avoid memory leak?<br>
→ Close files, remove references
`;
}
if (q.includes("mock interview")) {
  return `
🎤 <b>Mock Interview Started</b><br><br>

Q1️⃣ Difference between list and tuple?<br>
(Type your answer and I will evaluate it)
`;
}
if (q.includes("range")) {
  return `
<b>📏 range() Function</b><br><br>

Used to generate numbers.

<pre>
range(5)        → 0 to 4
range(1, 5)     → 1 to 4
range(1, 10, 2) → step of 2
</pre>

<b>Example:</b>
<pre>
for i in range(1, 6):
    print(i)
</pre>
`;
}
if (q.includes("break") || q.includes("continue") || q.includes("pass")) {
  return `
<b>🛑 break / continue / pass</b><br><br>

<b>break</b> → exits loop
<pre>
for i in range(5):
    if i == 3:
        break
</pre>

<b>continue</b> → skips iteration
<pre>
for i in range(5):
    if i == 3:
        continue
</pre>

<b>pass</b> → placeholder (does nothing)
<pre>
if x > 0:
    pass
</pre>
`;
}
if (q.includes("syntax") || q.includes("python syntax")) {
  return `
<b>🧾 Python Syntax Rules</b><br><br>

• Indentation is mandatory (4 spaces)<br>
• Colon (:) required after if/for/while/def<br>
• Case-sensitive language<br>
• No semicolon needed<br>

<b>Wrong:</b>
<pre>
if x > 5
    print(x)
</pre>

<b>Correct:</b>
<pre>
if x > 5:
    print(x)
</pre>
`;
}
if (q.includes("input")) {
  return `
<b>⌨ input() Function</b><br><br>

Used to take user input.

<pre>
name = input("Enter name: ")
print(name)
</pre>

<b>Convert input:</b>
<pre>
age = int(input("Enter age: "))
</pre>
`;
}
if (q.includes("type casting")) {
  return `
<b>🔁 Type Casting</b><br><br>

Convert one data type to another.

<pre>
int("10")   → 10
float("5") → 5.0
str(100)   → "100"
</pre>
`;
}

if (q.includes("append")) {
  return `
<b>.append()</b> adds a single element to the <b>end of a list</b>.  
It modifies the original list (lists are mutable).

<pre>
nums = [1, 2, 3]
nums.append(4)
print(nums)
</pre>

<b>Output:</b>
<pre>[1, 2, 3, 4]</pre>

<b>Use when:</b><br>
• Adding one item<br>
• Building lists dynamically
`;
}
if (q.includes("extend")) {
  return `
<b>.extend()</b> adds <b>multiple elements</b> from another iterable to a list.

<pre>
nums = [1, 2]
nums.extend([3, 4, 5])
print(nums)
</pre>

<b>Output:</b>
<pre>[1, 2, 3, 4, 5]</pre>

<b>Difference:</b><br>
• append() → adds one item<br>
• extend() → adds many items
`;
}
if (q.includes("insert")) {
  return `
<b>.insert()</b> adds an element at a <b>specific index</b>.

<pre>
nums = [1, 3, 4]
nums.insert(1, 2)
print(nums)
</pre>

<b>Output:</b>
<pre>[1, 2, 3, 4]</pre>

<b>Syntax:</b><br>
insert(index, value)
`;
}

if (q.includes("remove")) {
  return `
<b>.remove()</b> deletes the <b>first occurrence</b> of a value from a list.

<pre>
nums = [1, 2, 3, 2]
nums.remove(2)
print(nums)
</pre>

<b>Output:</b>
<pre>[1, 3, 2]</pre>

<b>Note:</b><br>
• Raises error if value not found
`;
}
if (q.includes("pop")) {
  return `
<b>.pop()</b> removes and returns an element by index.  
If no index is given, it removes the <b>last element</b>.

<pre>
nums = [10, 20, 30]
x = nums.pop()
print(x)
print(nums)
</pre>

<b>Output:</b>
<pre>
30
[10, 20]
</pre>

<b>Used in:</b><br>
• Stack operations
`;
}
if (q.includes("clear")) {
  return `
<b>.clear()</b> removes <b>all elements</b> from the list.

<pre>
nums = [1, 2, 3]
nums.clear()
print(nums)
</pre>

<b>Output:</b>
<pre>[]</pre>
`;
}
if (q.includes("index")) {
  return `
<b>.index()</b> returns the index of the first occurrence of a value.

<pre>
nums = [10, 20, 30]
print(nums.index(20))
</pre>

<b>Output:</b>
<pre>1</pre>

<b>Note:</b><br>
• Error if value not found
`;
}
if (q.includes("count")) {
  return `
<b>.count()</b> returns how many times a value appears in a list.

<pre>
nums = [1, 2, 2, 3, 2]
print(nums.count(2))
</pre>

<b>Output:</b>
<pre>3</pre>
`;
}
if (q.includes("sort")) {
  return `
<b>.sort()</b> arranges list elements in ascending order.

<pre>
nums = [4, 1, 3, 2]
nums.sort()
print(nums)
</pre>

<b>Output:</b>
<pre>[1, 2, 3, 4]</pre>

<b>Descending:</b>
<pre>nums.sort(reverse=True)</pre>
`;
}
if (q.includes("reverse")) {
  return `
<b>.reverse()</b> reverses the list in place.

<pre>
nums = [1, 2, 3]
nums.reverse()
print(nums)
</pre>

<b>Output:</b>
<pre>[3, 2, 1]</pre>
`;
}
if (q.includes("list slicing") || q.includes("[:]")) {
  return `
<b>📌 List Slicing in Python</b><br><br>

<b>Slicing</b> allows you to extract a portion of a list.

<b>Syntax:</b>
<pre>list[start : end : step]</pre>

<b>Examples:</b>

<pre>
nums = [10, 20, 30, 40, 50]

print(nums[1:4])   # [20, 30, 40]
print(nums[:3])    # [10, 20, 30]
print(nums[2:])    # [30, 40, 50]
print(nums[-2:])   # [40, 50]
</pre>

<b>Step slicing:</b>
<pre>
print(nums[::2])   # [10, 30, 50]
</pre>

<b>💡 Tip:</b><br>
• End index is excluded<br>
• Very useful for copying lists
`;
}
if (q.includes("nested list")) {
  return `
<b>📦 Nested Lists</b><br><br>

A <b>nested list</b> is a list inside another list.

<pre>
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
</pre>

<b>Access elements:</b>
<pre>
print(matrix[0])      # [1, 2, 3]
print(matrix[1][2])   # 6
</pre>

<b>Loop through nested list:</b>
<pre>
for row in matrix:
    for item in row:
        print(item)
</pre>

<b>Used in:</b><br>
• Matrices<br>
• Tables<br>
• Game boards
`;
}

if (q.includes("common mistakes")) {
  return `
<b>⚠ Common Python Beginner Mistakes</b><br><br>

• Missing colon (:)<br>
• Wrong indentation<br>
• Using = instead of ==<br>
• Forgetting parentheses in print()<br>
• Infinite while loops
`;
}
if (q.includes("practice questions")) {
  return `
<b>📝 Practice Questions</b><br><br>

1️⃣ Print numbers from 1 to 10 using for loop<br>
2️⃣ Find even numbers from a list<br>
3️⃣ Reverse a string<br>
4️⃣ Check palindrome<br>
5️⃣ Find factorial using while loop<br>

Type any question number to get solution 👇
`;
}
if (q.includes("1") || q.includes("print numbers") || q.includes("1 to 10")) {
  return `
<b>✅ Solution: Print numbers from 1 to 10</b><br><br>

<pre>
for i in range(1, 11):
    print(i)
</pre>

<b>Explanation:</b><br>
• range(1, 11) generates numbers from 1 to 10<br>
• for loop prints each number
`;
}
if (q.includes("2") || q.includes("even numbers")) {
  return `
<b>✅ Solution: Find even numbers from a list</b><br><br>

<pre>
nums = [1, 2, 3, 4, 5, 6]

for n in nums:
    if n % 2 == 0:
        print(n)
</pre>

<b>Explanation:</b><br>
• % operator checks remainder<br>
• Even numbers have remainder 0
`;
}
if (q.includes("4") || q.includes("palindrome")) {
  return `
<b>✅ Solution: Check Palindrome</b><br><br>

<pre>
s = "madam"

if s == s[::-1]:
    print("Palindrome")
else:
    print("Not Palindrome")
</pre>

<b>Explanation:</b><br>
• Palindrome reads same forward & backward
`;
}

if (q.includes("5") || q.includes("factorial")) {
  return `
<b>✅ Solution: Factorial using while loop</b><br><br>

<pre>
num = 5
fact = 1

while num > 0:
    fact *= num
    num -= 1

print(fact)
</pre>

<b>Explanation:</b><br>
• Multiply numbers from n down to 1<br>
• Factorial of 5 = 120
`;

}
if (q.includes("3") || q.includes("reverse string")) {
  return `
<b>✅ Solution: Reverse a string</b><br><br>

<b>Method 1 (Slicing):</b>
<pre>
s = "python"
print(s[::-1])
</pre>

<b>Method 2 (Loop):</b>
<pre>
s = "python"
rev = ""

for ch in s:
    rev = ch + rev

print(rev)
</pre>
`;
}
if (q.includes("what is variable") || q.includes("variable explain")) {
  return `
<b>📦 Variable (Simple Explanation)</b><br><br>

A <b>variable</b> is like a box that stores a value.<br><br>

<b>Example:</b>
<pre>
age = 25
name = "Alex"
</pre>

Here:<br>
• <b>age</b> stores number 25<br>
• <b>name</b> stores text "Alex"<br><br>

💡 Python automatically understands the type.
`;
}
if (q.includes("what is function") || q.includes("function explain")) {
  return `
<b>🧩 Function (Easy Way)</b><br><br>

A <b>function</b> is a reusable block of code.<br>
Think of it like a <b>machine</b>: input → output.<br><br>

<b>Example:</b>
<pre>
def greet(name):
    return "Hello " + name

print(greet("John"))
</pre>

✔ Avoid repetition<br>
✔ Cleaner code<br>
✔ Easy maintenance
`;
}
if (q.includes("for loop explain") || q.includes("for loop easy")) {
  return `
<b>🔁 For Loop (Step by Step)</b><br><br>

Used when you know <b>how many times</b> to run code.<br><br>

<b>Example:</b>
<pre>
for i in range(3):
    print(i)
</pre>

<b>How it works:</b><br>
• i = 0 → print<br>
• i = 1 → print<br>
• i = 2 → print<br>
• stops automatically ✅
`;
}

if (q.includes("while loop explain") || q.includes("while loop easy")) {
  return `
<b>🔄 While Loop (Easy)</b><br><br>

Runs code <b>until condition becomes false</b>.<br><br>

<b>Example:</b>
<pre>
i = 1
while i <= 3:
    print(i)
    i += 1
</pre>

⚠ Always update variable, or loop never stops!
`;
}
if (q.includes("what is list") || q === "list") {
  return `
<b>📋 List (Beginner Friendly)</b><br><br>

A <b>list</b> stores multiple values in one place.<br><br>

<b>Example:</b>
<pre>
fruits = ["apple", "banana", "mango"]
</pre>

<b>Why use list?</b><br>
• Store many values<br>
• Easy to update<br>
• Used everywhere in Python<br><br>

<b>Add item:</b>
<pre>
fruits.append("orange")
</pre>
`;
}
if (q.includes("dictionary")|| q.includes("dict")) {
  return `
<b>📘 Dictionary (Key-Value)</b><br><br>

 a dictionary is a built‑in data structure that stores data as key–value pairs.
It is unordered (in Python < 3.7), ordered (in Python ≥ 3.7), mutable, and does not allow duplicate keys.<br><br>

<b>Example:</b>
<pre>
student = {
  "name": "Alex",
  "age": 21,
  "course": "Python"
}
</pre>

Access value:
<pre>
print(student["name"])
</pre>
`;
}
if (
  (q.includes("keys") || q.includes("values") || q.includes("items")) &&
  aiContext.topic === "dictionary"
) {
  return `
<b>🧾 Dictionary keys(), values(), items()</b><br><br>

<pre>
student = {"name":"Alex", "age":21}
</pre>

<b>keys()</b>
<pre>student.keys()</pre>
→ dict_keys(['name', 'age'])

<b>values()</b>
<pre>student.values()</pre>
→ dict_values(['Alex', 21])

<b>items()</b>
<pre>student.items()</pre>
→ dict_items([('name','Alex'),('age',21)])

<b>Loop:</b>
<pre>
for k, v in student.items():
    print(k, v)
</pre>
`;
}

if (
  q.includes("update") &&
  aiContext.topic === "dictionary" &&
  !q.includes("list")
) {
  return `
<b>✏ dict.update()</b><br><br>

Used to <b>add or modify</b> key-value pairs.

<pre>
student = {"name":"Alex"}
student.update({"age":21, "course":"Python"})
</pre>

<b>Result:</b>
<pre>
{'name':'Alex','age':21,'course':'Python'}
</pre>

✔ Updates existing keys  
✔ Adds new keys
`;
}
if (q.includes("dictionary functions")) {
  setContext("dictionary");
  return `📘 Dictionary Functions...`;
}

if (q.includes("function")) {
  return `Function is a reusable block of code...`;
}

if (q.includes("dictionary functions") ||q.includes("dict functions") || q.includes("dict mutable") || q.includes("dictionary mutable")) {
  setContext("dictionary");
  return `
<b>📘 Dictionary Mutable Functions (Complete)</b><br><br>

Python <b>dictionaries are mutable</b>, meaning their content can be changed after creation.

<b>Example Dictionary:</b>
<pre>
student = {
  "name": "Alex",
  "age": 21,
  "course": "Python"
}
</pre>

<hr>

<b>1️⃣ dict.update()</b><br>
Adds or modifies key-value pairs.
<pre>
student.update({"age":22, "city":"Delhi"})
</pre>

<hr>

<b>2️⃣ dict.pop(key)</b><br>
Removes and returns value of given key.
<pre>
student.pop("age")
</pre>

<hr>

<b>3️⃣ dict.popitem()</b><br>
Removes and returns the <b>last inserted</b> key-value pair.
<pre>
student.popitem()
</pre>

<hr>

<b>4️⃣ dict.clear()</b><br>
Removes all items from dictionary.
<pre>
student.clear()
</pre>

<hr>

<b>5️⃣ dict.setdefault(key, value)</b><br>
Adds key only if it does not exist.
<pre>
student.setdefault("country", "India")
</pre>

<hr>

<b>6️⃣ dict[key] = value</b><br>
Direct assignment (most common).
<pre>
student["grade"] = "A"
</pre>

<hr>

<b>7️⃣ del dict[key]</b><br>
Deletes a key-value pair.
<pre>
del student["course"]
</pre>

<hr>

<b>⚠ Methods that DO NOT modify dictionary:</b><br>
• keys()<br>
• values()<br>
• items()<br>
• get()

<hr>

<b>🎯 Interview Tip:</b><br>
👉 Dictionaries are mutable, but <b>keys must be immutable</b> (int, str, tuple).

Ask next:<br>
• "dict update"<br>
• "dict pop vs del"<br>
• "dictionary interview questions"
`;
}


  /* =============================
     CODE CONTEXT
  ============================= */

  if (q.includes("this code") || q.includes("my code")) {
    if (!code.trim()) {
      return "Your editor is empty. Write some Python code first 🙂";
    }

    return `
<b>Code Analysis</b><br>
• Lines: <b>${code.split("\n").length}</b><br>
• Suggestion: Use functions<br>
• Add comments for clarity
`;
  }
    if (q.includes("list")) {
    return `
<b>List</b>  is a versatile and powerful data structure that allows you to store multiple items in a single variable. Lists are one of the four built-in data types in Python used to store collections of data, the other three being Tuple, Set, and Dictionary.

<pre>nums = [1,2,3]
nums.append(4)</pre>
`;
  }
  if (q.includes("tuple")) {
    return `
<b>Tuple</b> is ordered and immutable.

<pre>t = (1, 2, 3)</pre>
`;
  }
    if (q.includes("module")) {
    return `
<b>Module</b> is a file containing Python code.

<pre>import math
print(math.sqrt(16))</pre>
`;
  }
  if (q.includes("for loop")) {
  return `
<b>🔁 for loop in Python</b><br><br>

A <b>for loop</b> is used to iterate over a sequence
(list, tuple, string, range, etc.)

<b>Basic Syntax:</b>
<pre>
for i in range(5):
    print(i)
</pre>

<b>Loop through a list:</b>
<pre>
names = ["A", "B", "C"]
for name in names:
    print(name)
</pre>

<b>Best Practices:</b><br>
• Use meaningful variable names<br>
• Avoid unnecessary nested loops<br>
• Prefer <b>enumerate()</b> when index is needed
`;
}

  /* =============================
     DEFAULT RESPONSE
  ============================= */

  return `
🤖 I can help with:<br><br>
• Python basics<br>
• Data types<br>
• Loops & functions<br>
• OOP concepts<br>
• Errors & debugging<br>
• File handling<br><br>

Try asking:<br>
"What is Python?"<br>
"Explain list vs tuple"<br>
"What is inheritance?"
`;
}


/* =========================================
   AUTOMATIC PYTHON ERROR DETECTION
========================================= */

function detectPythonError(errorText) {
  if (!errorText) return;

  const err = errorText.toLowerCase();
  let response = "";

  if (err.includes("indentationerror")) {
    response = `<b>Indentation Error</b><br>Use 4 spaces consistently.`;
  }
  else if (err.includes("syntaxerror")) {
    response = `<b>Syntax Error</b><br>Check colons, brackets, syntax.`;
  }
  else if (err.includes("nameerror")) {
    response = `<b>Name Error</b><br>Variable or function not defined.`;
  }
  else if (err.includes("typeerror")) {
    response = `<b>Type Error</b><br>Wrong data type usage.`;
  }
  else if (err.includes("zerodivisionerror")) {
    response = `<b>Zero Division Error</b><br>Cannot divide by zero.`;
  }
  else if (err.includes("indexerror")) {
    response = `<b>Index Error</b><br>Index out of range.`;
  }
  else if (err.includes("keyerror")) {
    response = `<b>Key Error</b><br>Dictionary key not found.`;
  }
  else if (err.includes("importerror") || err.includes("modulenotfounderror")) {
    response = `<b>Import Error</b><br>Module not found.`;
  }

  if (response) {
    if (aiPanel && aiPanel.classList.contains("hidden")) {
      aiPanel.classList.remove("hidden");
    }

    addMessage("⚠️ I detected an error in your code.", "bot");
    addMessage(response, "bot");

    setTimeout(() => aiInput?.focus(), 200);
  }
}

window.detectPythonError = detectPythonError;


