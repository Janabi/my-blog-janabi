// Runnable code examples for blog posts
export const runnableExamples = {
  javascript: [
    {
      title: 'Arrow Functions',
      code: `// Traditional function
const add = function(a, b) {
  return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

console.log('Addition: 5 + 3 =', add(5, 3));
console.log('Multiplication: 5 * 3 =', multiply(5, 3));`,
      language: 'javascript'
    },
    {
      title: 'Destructuring',
      code: `const person = { name: 'Janabi', role: 'Programmer' };
const { name, role } = person;

console.log('Name:', name);
console.log('Role:', role);

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log('First:', first);
console.log('Second:', second);
console.log('Rest:', rest);`,
      language: 'javascript'
    },
    {
      title: 'Template Literals',
      code: `const name = 'Janabi';
const language = 'JavaScript';

const greeting = \`Hello, \${name}!
Welcome to modern \${language}.\`;

console.log(greeting);

const multiline = \`
  This is a
  multiline string
  in JavaScript!
\`;

console.log(multiline);`,
      language: 'javascript'
    }
  ],
  python: [
    {
      title: 'List Comprehensions',
      code: `# Traditional way
squares_traditional = []
for x in range(10):
    if x % 2 == 0:
        squares_traditional.append(x**2)

print("Traditional:", squares_traditional)

# Pythonic way with list comprehension
squares = [x**2 for x in range(10) if x % 2 == 0]
print("List comprehension:", squares)`,
      language: 'python'
    },
    {
      title: 'Python Functions',
      code: `def greet(name, language="Python"):
    """Greet someone in their favorite language"""
    return f"Hello {name}! Welcome to {language}!"

# Call the function
print(greet("Janabi"))
print(greet("Developer", "JavaScript"))

# Lambda function
multiply = lambda x, y: x * y
print("5 * 3 =", multiply(5, 3))`,
      language: 'python'
    },
    {
      title: 'Working with Lists',
      code: `# Creating lists
numbers = [1, 2, 3, 4, 5]
print("Original list:", numbers)

# List operations
numbers.append(6)
print("After append:", numbers)

# Slicing
print("First 3 elements:", numbers[:3])
print("Last 3 elements:", numbers[-3:])

# Map and filter
doubled = list(map(lambda x: x * 2, numbers))
print("Doubled:", doubled)

evens = list(filter(lambda x: x % 2 == 0, numbers))
print("Even numbers:", evens)`,
      language: 'python'
    }
  ],
  rust: [
    {
      title: 'Basic Rust Program',
      code: `fn main() {
    println!("Hello from Rust!");

    let x = 5;
    let y = 10;

    println!("x = {}, y = {}", x, y);
    println!("x + y = {}", x + y);
}`,
      language: 'rust'
    },
    {
      title: 'Variables and Mutability',
      code: `fn main() {
    // Immutable by default
    let x = 5;
    println!("x = {}", x);

    // Mutable variable
    let mut y = 10;
    println!("y before = {}", y);
    y = 20;
    println!("y after = {}", y);

    // Shadowing
    let z = 5;
    let z = z + 1;
    let z = z * 2;
    println!("z = {}", z);
}`,
      language: 'rust'
    }
  ]
};

export const getExamplesByLanguage = (language) => {
  return runnableExamples[language.toLowerCase()] || [];
};
