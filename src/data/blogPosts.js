// SEO-optimized blog posts data structure with bilingual support
export const blogPosts = [
  {
    id: 1,
    slug: 'javascript-modern-features-es6-beyond',
    en: {
      title: 'JavaScript Modern Features: ES6 and Beyond',
      description: 'Explore the powerful modern features of JavaScript including arrow functions, destructuring, async/await, and more. Learn how ES6+ transforms JavaScript development.',
      author: 'Janabi Programmer',
      category: 'JavaScript',
      tags: ['JavaScript', 'ES6', 'Web Development', 'Programming'],
      readTime: '8 min read',
      content: `
        <article>
          <p>JavaScript has evolved significantly since the introduction of ES6 (ECMAScript 2015). Let's explore the most impactful features that have transformed modern web development.</p>

          <h2>Arrow Functions</h2>
          <p>Arrow functions provide a more concise syntax for writing functions and lexically bind the 'this' value.</p>
          <pre><code>// Traditional function
const add = function(a, b) {
  return a + b;
};

// Arrow function
const add = (a, b) => a + b;</code></pre>

          <h2>Destructuring</h2>
          <p>Destructuring makes it easy to extract values from arrays and objects into distinct variables.</p>
          <pre><code>const person = { name: 'Janabi', role: 'Programmer' };
const { name, role } = person;

const numbers = [1, 2, 3];
const [first, second] = numbers;</code></pre>

          <h2>Async/Await</h2>
          <p>Async/await makes asynchronous code look and behave more like synchronous code, improving readability.</p>
          <pre><code>async function fetchData() {
  try {
    const response = await fetch('api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}</code></pre>

          <h2>Template Literals</h2>
          <p>Template literals allow embedded expressions and multi-line strings.</p>
          <pre><code>const name = 'Janabi';
const greeting = \`Hello, \${name}!
Welcome to modern JavaScript.\`;</code></pre>

          <h2>Conclusion</h2>
          <p>These modern JavaScript features have revolutionized how we write code, making it more readable, maintainable, and powerful. Understanding and utilizing these features is essential for any modern web developer.</p>
        </article>
      `,
      keywords: ['JavaScript ES6', 'modern JavaScript', 'arrow functions', 'destructuring', 'async await', 'JavaScript features']
    },
    ar: {
      title: 'مميزات JavaScript الحديثة: ES6 وما بعدها',
      description: 'استكشف المميزات الحديثة القوية لـ JavaScript بما في ذلك دوال الأسهم، التفكيك، async/await، والمزيد. تعلم كيف يحول ES6+ تطوير JavaScript.',
      author: 'جنابي للبرمجة',
      category: 'JavaScript',
      tags: ['JavaScript', 'ES6', 'تطوير الويب', 'البرمجة'],
      readTime: '٨ دقائق قراءة',
      content: `
        <article>
          <p>تطورت JavaScript بشكل كبير منذ تقديم ES6 (ECMAScript 2015). لنستكشف المميزات الأكثر تأثيراً التي حولت تطوير الويب الحديث.</p>

          <h2>دوال الأسهم (Arrow Functions)</h2>
          <p>توفر دوال الأسهم صيغة أكثر إيجازاً لكتابة الدوال وتربط قيمة 'this' معجمياً.</p>
          <pre><code>// Traditional function
const add = function(a, b) {
  return a + b;
};

// Arrow function
const add = (a, b) => a + b;</code></pre>

          <h2>التفكيك (Destructuring)</h2>
          <p>يسهل التفكيك استخراج القيم من المصفوفات والكائنات إلى متغيرات منفصلة.</p>
          <pre><code>const person = { name: 'Janabi', role: 'Programmer' };
const { name, role } = person;

const numbers = [1, 2, 3];
const [first, second] = numbers;</code></pre>

          <h2>Async/Await</h2>
          <p>تجعل Async/await الكود غير المتزامن يبدو ويتصرف أكثر مثل الكود المتزامن، مما يحسن قابلية القراءة.</p>
          <pre><code>async function fetchData() {
  try {
    const response = await fetch('api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}</code></pre>

          <h2>القوالب النصية (Template Literals)</h2>
          <p>تسمح القوالب النصية بالتعبيرات المضمنة والسلاسل متعددة الأسطر.</p>
          <pre><code>const name = 'Janabi';
const greeting = \`Hello, \${name}!
Welcome to modern JavaScript.\`;</code></pre>

          <h2>الخلاصة</h2>
          <p>أحدثت مميزات JavaScript الحديثة ثورة في طريقة كتابة الكود، مما جعله أكثر قابلية للقراءة والصيانة والقوة. فهم واستخدام هذه المميزات أمر أساسي لأي مطور ويب حديث.</p>
        </article>
      `,
      keywords: ['JavaScript ES6', 'JavaScript حديث', 'دوال الأسهم', 'التفكيك', 'async await', 'مميزات JavaScript']
    },
    publishDate: '2024-11-14',
    lastModified: '2024-11-14',
    image: '/images/javascript-features.jpg',
    imageAlt: 'JavaScript ES6 modern features code example'
  },
  {
    id: 2,
    slug: 'python-best-practices-clean-code',
    en: {
      title: 'Python Best Practices: Writing Clean and Pythonic Code',
      description: 'Master Python best practices and conventions. Learn how to write clean, maintainable, and Pythonic code following PEP 8 guidelines and industry standards.',
      author: 'Janabi Programmer',
      category: 'Python',
      tags: ['Python', 'Best Practices', 'Clean Code', 'PEP 8'],
      readTime: '10 min read',
      content: `
        <article>
          <p>Writing Pythonic code is about more than just making your code work—it's about writing code that is readable, maintainable, and follows the conventions of the Python community.</p>

          <h2>Follow PEP 8 Guidelines</h2>
          <p>PEP 8 is the style guide for Python code. Following it ensures consistency across projects.</p>
          <pre><code># Good - following PEP 8
def calculate_total_price(items, tax_rate):
    subtotal = sum(item.price for item in items)
    return subtotal * (1 + tax_rate)

# Bad - not following conventions
def calculateTotalPrice(Items,taxRate):
    SubTotal=sum(item.price for item in Items)
    return SubTotal*(1+taxRate)</code></pre>

          <h2>Use List Comprehensions</h2>
          <p>List comprehensions provide a concise way to create lists and are more Pythonic than traditional loops.</p>
          <pre><code># Pythonic way
squares = [x**2 for x in range(10) if x % 2 == 0]

# Less Pythonic
squares = []
for x in range(10):
    if x % 2 == 0:
        squares.append(x**2)</code></pre>

          <h2>Use Context Managers</h2>
          <p>Always use context managers (with statements) for resource management.</p>
          <pre><code># Good - using context manager
with open('file.txt', 'r') as file:
    content = file.read()
    # File is automatically closed

# Bad - manual resource management
file = open('file.txt', 'r')
content = file.read()
file.close()  # Easy to forget!</code></pre>

          <h2>Embrace Duck Typing</h2>
          <p>Python uses duck typing—if it walks like a duck and quacks like a duck, it's a duck.</p>
          <pre><code>def process_items(items):
    # Works with any iterable
    for item in items:
        print(item)

# Works with list, tuple, set, generator, etc.</code></pre>

          <h2>Use Descriptive Names</h2>
          <p>Variable and function names should be descriptive and follow conventions.</p>
          <pre><code># Good
user_authentication_token = generate_token(user)
is_valid = validate_email(email_address)

# Bad
uat = gen_tok(u)
v = val(e)</code></pre>

          <h2>Conclusion</h2>
          <p>Writing clean, Pythonic code makes your projects more maintainable and easier to collaborate on. These practices are essential for professional Python development.</p>
        </article>
      `,
      keywords: ['Python best practices', 'Pythonic code', 'PEP 8', 'clean code Python', 'Python conventions', 'Python programming']
    },
    ar: {
      title: 'أفضل ممارسات Python: كتابة كود نظيف وبايثوني',
      description: 'أتقن أفضل ممارسات واصطلاحات Python. تعلم كيفية كتابة كود نظيف وقابل للصيانة وبايثوني باتباع إرشادات PEP 8 ومعايير الصناعة.',
      author: 'جنابي للبرمجة',
      category: 'Python',
      tags: ['Python', 'أفضل الممارسات', 'كود نظيف', 'PEP 8'],
      readTime: '١٠ دقائق قراءة',
      content: `
        <article>
          <p>كتابة كود بايثوني هو أكثر من مجرد جعل الكود يعمل—إنه يتعلق بكتابة كود قابل للقراءة والصيانة ويتبع اصطلاحات مجتمع Python.</p>

          <h2>اتبع إرشادات PEP 8</h2>
          <p>PEP 8 هو دليل الأسلوب لكود Python. اتباعه يضمن الاتساق عبر المشاريع.</p>
          <pre><code># Good - following PEP 8
def calculate_total_price(items, tax_rate):
    subtotal = sum(item.price for item in items)
    return subtotal * (1 + tax_rate)

# Bad - not following conventions
def calculateTotalPrice(Items,taxRate):
    SubTotal=sum(item.price for item in Items)
    return SubTotal*(1+taxRate)</code></pre>

          <h2>استخدم تعبيرات القوائم (List Comprehensions)</h2>
          <p>توفر تعبيرات القوائم طريقة موجزة لإنشاء القوائم وهي أكثر بايثونية من الحلقات التقليدية.</p>
          <pre><code># Pythonic way
squares = [x**2 for x in range(10) if x % 2 == 0]

# Less Pythonic
squares = []
for x in range(10):
    if x % 2 == 0:
        squares.append(x**2)</code></pre>

          <h2>استخدم مديري السياق (Context Managers)</h2>
          <p>استخدم دائماً مديري السياق (عبارات with) لإدارة الموارد.</p>
          <pre><code># Good - using context manager
with open('file.txt', 'r') as file:
    content = file.read()
    # File is automatically closed

# Bad - manual resource management
file = open('file.txt', 'r')
content = file.read()
file.close()  # Easy to forget!</code></pre>

          <h2>احتضن الكتابة البطية (Duck Typing)</h2>
          <p>تستخدم Python الكتابة البطية—إذا كان يمشي مثل البط ويصدر صوتاً مثل البط، فهو بط.</p>
          <pre><code>def process_items(items):
    # Works with any iterable
    for item in items:
        print(item)

# Works with list, tuple, set, generator, etc.</code></pre>

          <h2>استخدم أسماء وصفية</h2>
          <p>يجب أن تكون أسماء المتغيرات والدوال وصفية وتتبع الاصطلاحات.</p>
          <pre><code># Good
user_authentication_token = generate_token(user)
is_valid = validate_email(email_address)

# Bad
uat = gen_tok(u)
v = val(e)</code></pre>

          <h2>الخلاصة</h2>
          <p>كتابة كود بايثوني نظيف يجعل مشاريعك أكثر قابلية للصيانة وأسهل للتعاون. هذه الممارسات ضرورية للتطوير الاحترافي بـ Python.</p>
        </article>
      `,
      keywords: ['أفضل ممارسات Python', 'كود بايثوني', 'PEP 8', 'كود نظيف Python', 'اصطلاحات Python', 'برمجة Python']
    },
    publishDate: '2024-11-10',
    lastModified: '2024-11-10',
    image: '/images/python-best-practices.jpg',
    imageAlt: 'Python clean code best practices illustration'
  },
  {
    id: 3,
    slug: 'typescript-advanced-types-generics',
    en: {
      title: 'TypeScript Advanced Types and Generics: A Complete Guide',
      description: 'Deep dive into TypeScript advanced type system including generics, conditional types, mapped types, and utility types. Enhance your TypeScript skills.',
      author: 'Janabi Programmer',
      category: 'TypeScript',
      tags: ['TypeScript', 'Generics', 'Advanced Types', 'Type System'],
      readTime: '12 min read',
      content: `
        <article>
          <p>TypeScript's type system is one of its most powerful features. Let's explore advanced types and generics that will take your TypeScript skills to the next level.</p>

          <h2>Understanding Generics</h2>
          <p>Generics allow you to create reusable components that work with multiple types while maintaining type safety.</p>
          <pre><code>// Generic function
function identity&lt;T&gt;(arg: T): T {
  return arg;
}

// Usage
const num = identity&lt;number&gt;(42);
const str = identity&lt;string&gt;("Hello");

// Generic interface
interface Box&lt;T&gt; {
  value: T;
}

const numberBox: Box&lt;number&gt; = { value: 123 };
const stringBox: Box&lt;string&gt; = { value: "TypeScript" };</code></pre>

          <h2>Conditional Types</h2>
          <p>Conditional types allow you to create types based on conditions.</p>
          <pre><code>type IsString&lt;T&gt; = T extends string ? true : false;

type A = IsString&lt;string&gt;;  // true
type B = IsString&lt;number&gt;;  // false

// Practical example
type NonNullable&lt;T&gt; = T extends null | undefined ? never : T;

type C = NonNullable&lt;string | null&gt;;  // string</code></pre>

          <h2>Mapped Types</h2>
          <p>Mapped types allow you to transform properties of existing types.</p>
          <pre><code>type Readonly&lt;T&gt; = {
  readonly [P in keyof T]: T[P];
};

type Optional&lt;T&gt; = {
  [P in keyof T]?: T[P];
};

interface User {
  id: number;
  name: string;
}

type ReadonlyUser = Readonly&lt;User&gt;;
type PartialUser = Optional&lt;User&gt;;</code></pre>

          <h2>Utility Types</h2>
          <p>TypeScript provides built-in utility types for common type transformations.</p>
          <pre><code>// Partial - makes all properties optional
type PartialUser = Partial&lt;User&gt;;

// Required - makes all properties required
type RequiredUser = Required&lt;PartialUser&gt;;

// Pick - selects specific properties
type UserPreview = Pick&lt;User, 'id' | 'name'&gt;;

// Omit - excludes specific properties
type UserWithoutId = Omit&lt;User, 'id'&gt;;

// Record - creates object type with specific keys and values
type Roles = Record&lt;string, string[]&gt;;</code></pre>

          <h2>Generic Constraints</h2>
          <p>Constraints allow you to restrict the types that can be used with generics.</p>
          <pre><code>interface HasLength {
  length: number;
}

function logLength&lt;T extends HasLength&gt;(arg: T): void {
  console.log(arg.length);
}

logLength("Hello");     // OK
logLength([1, 2, 3]);   // OK
logLength(123);         // Error: number doesn't have length</code></pre>

          <h2>Conclusion</h2>
          <p>Mastering advanced TypeScript types and generics enables you to write more robust, reusable, and type-safe code. These features are essential for building scalable TypeScript applications.</p>
        </article>
      `,
      keywords: ['TypeScript generics', 'TypeScript advanced types', 'conditional types', 'mapped types', 'utility types', 'TypeScript programming']
    },
    ar: {
      title: 'الأنواع المتقدمة والجينيريك في TypeScript: دليل شامل',
      description: 'تعمق في نظام الأنواع المتقدم في TypeScript بما في ذلك الجينيريك، الأنواع الشرطية، الأنواع المعينة، والأنواع المساعدة. عزز مهاراتك في TypeScript.',
      author: 'جنابي للبرمجة',
      category: 'TypeScript',
      tags: ['TypeScript', 'جينيريك', 'أنواع متقدمة', 'نظام الأنواع'],
      readTime: '١٢ دقيقة قراءة',
      content: `
        <article>
          <p>نظام الأنواع في TypeScript هو واحد من أقوى ميزاته. لنستكشف الأنواع المتقدمة والجينيريك التي ستأخذ مهاراتك في TypeScript إلى المستوى التالي.</p>

          <h2>فهم الجينيريك (Generics)</h2>
          <p>تتيح لك الجينيريك إنشاء مكونات قابلة لإعادة الاستخدام تعمل مع أنواع متعددة مع الحفاظ على أمان الأنواع.</p>
          <pre><code>// Generic function
function identity&lt;T&gt;(arg: T): T {
  return arg;
}

// Usage
const num = identity&lt;number&gt;(42);
const str = identity&lt;string&gt;("Hello");

// Generic interface
interface Box&lt;T&gt; {
  value: T;
}

const numberBox: Box&lt;number&gt; = { value: 123 };
const stringBox: Box&lt;string&gt; = { value: "TypeScript" };</code></pre>

          <h2>الأنواع الشرطية (Conditional Types)</h2>
          <p>تسمح لك الأنواع الشرطية بإنشاء أنواع بناءً على شروط.</p>
          <pre><code>type IsString&lt;T&gt; = T extends string ? true : false;

type A = IsString&lt;string&gt;;  // true
type B = IsString&lt;number&gt;;  // false

// Practical example
type NonNullable&lt;T&gt; = T extends null | undefined ? never : T;

type C = NonNullable&lt;string | null&gt;;  // string</code></pre>

          <h2>الأنواع المعينة (Mapped Types)</h2>
          <p>تسمح لك الأنواع المعينة بتحويل خصائص الأنواع الموجودة.</p>
          <pre><code>type Readonly&lt;T&gt; = {
  readonly [P in keyof T]: T[P];
};

type Optional&lt;T&gt; = {
  [P in keyof T]?: T[P];
};

interface User {
  id: number;
  name: string;
}

type ReadonlyUser = Readonly&lt;User&gt;;
type PartialUser = Optional&lt;User&gt;;</code></pre>

          <h2>الأنواع المساعدة (Utility Types)</h2>
          <p>يوفر TypeScript أنواعاً مساعدة مدمجة لتحويلات الأنواع الشائعة.</p>
          <pre><code>// Partial - makes all properties optional
type PartialUser = Partial&lt;User&gt;;

// Required - makes all properties required
type RequiredUser = Required&lt;PartialUser&gt;;

// Pick - selects specific properties
type UserPreview = Pick&lt;User, 'id' | 'name'&gt;;

// Omit - excludes specific properties
type UserWithoutId = Omit&lt;User, 'id'&gt;;

// Record - creates object type with specific keys and values
type Roles = Record&lt;string, string[]&gt;;</code></pre>

          <h2>قيود الجينيريك (Generic Constraints)</h2>
          <p>تسمح لك القيود بتقييد الأنواع التي يمكن استخدامها مع الجينيريك.</p>
          <pre><code>interface HasLength {
  length: number;
}

function logLength&lt;T extends HasLength&gt;(arg: T): void {
  console.log(arg.length);
}

logLength("Hello");     // OK
logLength([1, 2, 3]);   // OK
logLength(123);         // Error: number doesn't have length</code></pre>

          <h2>الخلاصة</h2>
          <p>إتقان الأنواع المتقدمة والجينيريك في TypeScript يمكّنك من كتابة كود أكثر قوة وقابلية لإعادة الاستخدام وأماناً من حيث الأنواع. هذه المميزات ضرورية لبناء تطبيقات TypeScript قابلة للتطوير.</p>
        </article>
      `,
      keywords: ['TypeScript جينيريك', 'أنواع TypeScript متقدمة', 'أنواع شرطية', 'أنواع معينة', 'أنواع مساعدة', 'برمجة TypeScript']
    },
    publishDate: '2024-11-05',
    lastModified: '2024-11-05',
    image: '/images/typescript-advanced.jpg',
    imageAlt: 'TypeScript advanced types and generics code example'
  },
  {
    id: 4,
    slug: 'rust-ownership-memory-safety',
    en: {
      title: 'Rust Ownership System: Understanding Memory Safety Without Garbage Collection',
      description: 'Learn how Rust achieves memory safety through its unique ownership system. Understand borrowing, lifetimes, and why Rust is revolutionizing systems programming.',
      author: 'Janabi Programmer',
      category: 'Rust',
      tags: ['Rust', 'Memory Safety', 'Ownership', 'Systems Programming'],
      readTime: '15 min read',
      content: `
        <article>
          <p>Rust's ownership system is its most distinctive feature, enabling memory safety without garbage collection. Let's understand how this revolutionary approach works.</p>

          <h2>The Three Rules of Ownership</h2>
          <p>Rust's ownership system is based on three fundamental rules:</p>
          <ol>
            <li>Each value in Rust has a variable that's called its owner</li>
            <li>There can only be one owner at a time</li>
            <li>When the owner goes out of scope, the value is dropped</li>
          </ol>
          <pre><code>fn main() {
    let s1 = String::from("hello");
    let s2 = s1;  // s1 is moved to s2

    // println!("{}", s1);  // Error! s1 no longer valid
    println!("{}", s2);     // OK
}</code></pre>

          <h2>Borrowing and References</h2>
          <p>Borrowing allows you to reference a value without taking ownership.</p>
          <pre><code>fn main() {
    let s1 = String::from("hello");

    let len = calculate_length(&s1);  // Borrow s1

    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}  // s goes out of scope, but doesn't own the data</code></pre>

          <h2>Mutable References</h2>
          <p>You can have mutable references, but with restrictions to prevent data races.</p>
          <pre><code>fn main() {
    let mut s = String::from("hello");

    change(&mut s);

    println!("{}", s);  // "hello, world"
}

fn change(s: &mut String) {
    s.push_str(", world");
}

// Rule: Only ONE mutable reference at a time
let mut s = String::from("hello");
let r1 = &mut s;
// let r2 = &mut s;  // Error! Can't have two mutable references</code></pre>

          <h2>Lifetimes</h2>
          <p>Lifetimes ensure that references are valid for as long as they're used.</p>
          <pre><code>// Explicit lifetime annotation
fn longest&lt;'a&gt;(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let string1 = String::from("long string");
    let string2 = String::from("xyz");

    let result = longest(string1.as_str(), string2.as_str());
    println!("The longest string is {}", result);
}</code></pre>

          <h2>Why This Matters</h2>
          <p>Rust's ownership system prevents common bugs at compile time:</p>
          <ul>
            <li>No null pointer dereferences</li>
            <li>No use-after-free errors</li>
            <li>No data races in concurrent code</li>
            <li>No memory leaks (in safe code)</li>
          </ul>

          <h2>The Copy Trait</h2>
          <p>Simple types implement the Copy trait and are copied instead of moved.</p>
          <pre><code>fn main() {
    let x = 5;
    let y = x;  // x is copied, not moved

    println!("x = {}, y = {}", x, y);  // Both valid!
}

// Types that implement Copy: integers, booleans, floats, char, tuples of Copy types</code></pre>

          <h2>Conclusion</h2>
          <p>Rust's ownership system may seem complex at first, but it provides unparalleled memory safety guarantees at compile time. This is why Rust is becoming the language of choice for systems programming, replacing C and C++ in critical applications.</p>
        </article>
      `,
      keywords: ['Rust programming', 'Rust ownership', 'memory safety', 'borrowing Rust', 'lifetimes Rust', 'systems programming']
    },
    ar: {
      title: 'نظام الملكية في Rust: فهم أمان الذاكرة بدون جامع القمامة',
      description: 'تعلم كيف تحقق Rust أمان الذاكرة من خلال نظام الملكية الفريد. افهم الاستعارة، أوقات الحياة، ولماذا تُحدث Rust ثورة في برمجة الأنظمة.',
      author: 'جنابي للبرمجة',
      category: 'Rust',
      tags: ['Rust', 'أمان الذاكرة', 'الملكية', 'برمجة الأنظمة'],
      readTime: '١٥ دقيقة قراءة',
      content: `
        <article>
          <p>نظام الملكية في Rust هو ميزته الأكثر تميزاً، مما يتيح أمان الذاكرة بدون جامع القمامة. لنفهم كيف يعمل هذا النهج الثوري.</p>

          <h2>القواعد الثلاث للملكية</h2>
          <p>يعتمد نظام الملكية في Rust على ثلاث قواعد أساسية:</p>
          <ol>
            <li>كل قيمة في Rust لها متغير يُسمى مالكها</li>
            <li>يمكن أن يكون هناك مالك واحد فقط في كل مرة</li>
            <li>عندما يخرج المالك من النطاق، يتم إسقاط القيمة</li>
          </ol>
          <pre><code>fn main() {
    let s1 = String::from("hello");
    let s2 = s1;  // s1 is moved to s2

    // println!("{}", s1);  // Error! s1 no longer valid
    println!("{}", s2);     // OK
}</code></pre>

          <h2>الاستعارة والمراجع (Borrowing and References)</h2>
          <p>تسمح لك الاستعارة بالإشارة إلى قيمة دون أخذ الملكية.</p>
          <pre><code>fn main() {
    let s1 = String::from("hello");

    let len = calculate_length(&s1);  // Borrow s1

    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}  // s goes out of scope, but doesn't own the data</code></pre>

          <h2>المراجع القابلة للتعديل (Mutable References)</h2>
          <p>يمكن أن يكون لديك مراجع قابلة للتعديل، ولكن مع قيود لمنع سباقات البيانات.</p>
          <pre><code>fn main() {
    let mut s = String::from("hello");

    change(&mut s);

    println!("{}", s);  // "hello, world"
}

fn change(s: &mut String) {
    s.push_str(", world");
}

// Rule: Only ONE mutable reference at a time
let mut s = String::from("hello");
let r1 = &mut s;
// let r2 = &mut s;  // Error! Can't have two mutable references</code></pre>

          <h2>أوقات الحياة (Lifetimes)</h2>
          <p>تضمن أوقات الحياة أن المراجع صالحة طالما يتم استخدامها.</p>
          <pre><code>// Explicit lifetime annotation
fn longest&lt;'a&gt;(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let string1 = String::from("long string");
    let string2 = String::from("xyz");

    let result = longest(string1.as_str(), string2.as_str());
    println!("The longest string is {}", result);
}</code></pre>

          <h2>لماذا هذا مهم</h2>
          <p>يمنع نظام الملكية في Rust الأخطاء الشائعة في وقت الترجمة:</p>
          <ul>
            <li>لا يوجد إلغاء مرجعية للمؤشر الفارغ</li>
            <li>لا توجد أخطاء استخدام بعد التحرير</li>
            <li>لا توجد سباقات بيانات في الكود المتزامن</li>
            <li>لا يوجد تسرب للذاكرة (في الكود الآمن)</li>
          </ul>

          <h2>خاصية النسخ (Copy Trait)</h2>
          <p>تنفذ الأنواع البسيطة خاصية النسخ ويتم نسخها بدلاً من نقلها.</p>
          <pre><code>fn main() {
    let x = 5;
    let y = x;  // x is copied, not moved

    println!("x = {}, y = {}", x, y);  // Both valid!
}

// Types that implement Copy: integers, booleans, floats, char, tuples of Copy types</code></pre>

          <h2>الخلاصة</h2>
          <p>قد يبدو نظام الملكية في Rust معقداً في البداية، لكنه يوفر ضمانات أمان ذاكرة لا مثيل لها في وقت الترجمة. هذا هو السبب في أن Rust أصبحت اللغة المفضلة لبرمجة الأنظمة، لتحل محل C و C++ في التطبيقات الحرجة.</p>
        </article>
      `,
      keywords: ['برمجة Rust', 'ملكية Rust', 'أمان الذاكرة', 'استعارة Rust', 'أوقات حياة Rust', 'برمجة الأنظمة']
    },
    publishDate: '2024-11-01',
    lastModified: '2024-11-01',
    image: '/images/rust-ownership.jpg',
    imageAlt: 'Rust programming language ownership and memory safety'
  }
];

// Helper functions for SEO - now with language support
export const getPostBySlug = (slug, language = 'en') => {
  const post = blogPosts.find(post => post.slug === slug);
  if (!post) return null;

  // Merge common fields with language-specific content
  return {
    ...post[language],
    slug: post.slug,
    publishDate: post.publishDate,
    lastModified: post.lastModified,
    image: post.image,
    imageAlt: post.imageAlt,
    id: post.id
  };
};

export const getPostsByCategory = (category, language = 'en') => {
  return blogPosts
    .filter(post => post[language].category === category)
    .map(post => ({
      ...post[language],
      slug: post.slug,
      publishDate: post.publishDate,
      lastModified: post.lastModified,
      image: post.image,
      imageAlt: post.imageAlt,
      id: post.id
    }));
};

export const getAllCategories = (language = 'en') => {
  return [...new Set(blogPosts.map(post => post[language].category))];
};

export const getAllTags = (language = 'en') => {
  return [...new Set(blogPosts.flatMap(post => post[language].tags))];
};

export const getAllPosts = (language = 'en') => {
  return blogPosts.map(post => ({
    ...post[language],
    slug: post.slug,
    publishDate: post.publishDate,
    lastModified: post.lastModified,
    image: post.image,
    imageAlt: post.imageAlt,
    id: post.id
  }));
};
