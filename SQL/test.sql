  select ENAME FROM emp WHERE DEPTNO = 30;

SELECT ENAME,EMPNO,DEPTNO FROM EMP WHERE JOB = 'CLERK';

SELECT DEPTNO,ENAME FROM EMP WHERE DEPTNO >= 20;

SELECT ENAME FROM EMP WHERE COMM > SAL;

SELECT ENAME FROM EMP WHERE COMM > 0.5*SAL;

SELECT ENAME,JOB,SAL FROM EMP WHERE DEPTNO=20 AND SAL>2000;

SELECT JOB FROM EMP WHERE JOB='SALESMAN' AND DEPTNO=30 AND  SAL >= 1500;

SELECT * FROM EMP WHERE JOB='PRESIDENT' OR JOB='MANAGER'

SELECT * FROM EMP WHERE JOB='MANAGER' AND DEPTNO!=30

SELECT * FROM EMP WHERE JOB='MANAGER' or (JOB='CLERK' AND DEPTNO=10)

SELECT * FROM EMP WHERE (JOB='MANAGER' OR JOB='CLERK') AND DEPTNO=10

SELECT * FROM EMP WHERE (JOB='MANAGER' AND DEPTNO=10) OR (JOB='CLERK' AND DEPTNO=20)

SELECT * FROM EMP WHERE (JOB!='MANAGER' AND JOB!='CLERK') AND SAL>=2000

SELECT * FROM EMP WHERE SAL BETWEEN 1200 AND 1400

SELECT * FROM EMP WHERE COMM IS NULL

SELECT JOB FROM EMP WHERE COMM!=0 AND COMM IS NOT NULL

SELECT * FROM EMP WHERE (COMM+SAL > 2000)

SELECT * FROM EMP WHERE ENAME LIKE '__R%'

===============================================

select * from emp where to_char(hiredate,'DD') = '28'

select * from emp where (to_char(hiredate,'YY')+12) <= to_char(sysdate,'yy') 

select * from emp where job='CLERK' and to_char(hiredate,'yy')='07'

select '('||ename||','||job from emp;

select INITCAP(ename) from emp;

select LPAD(ename,15,' ') from emp;

select length(ename) from emp;

select REPLACE(ename,'A','') from emp where ename like 'A%' and ename not like '%A%'

select * from emp;
