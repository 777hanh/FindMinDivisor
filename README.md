**Đề:**

Cho 2 số nguyên A, B. Ta có thể tăng hoặc giảm B đi để sao cho A chia hết cho B số giá trị tăng hoặc giảm nhỏ nhất.

**`Input`**: (1 < A, B < 1015)

**`Output`**: In ra giá trị tối thiểu

ví dụ:

```md
# Input: A = 49; B = 5;

# Output: 2

# 49 % 7
```

```md
# Input: A = 51; B = 5;

# Output: 2

# 51 % 3
```

```md
# Input: A = 6; B = 12;

# Output: 6

# 6 % 6
```

# Hướng giải:

1.  Tìm ước chung lớn nhất của A,B
2.  Nếu UCLN == B || UCLN == A => result: B || A
3.  Tìm các số mà A chia hết ( từ 1 đến A )
4.  Lấy B trừ cho lần lượt các số mà A chia hết lấy giá trị tuyệt đối. Lấy giá trị nhỏ nhất.
