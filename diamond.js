function diamond(n) {
n = parseInt(n,10);
if (n% 2 == 0 )   {
alert( "Odd numbers only!" );
return false;
}

document.write("<pre>");

for(i=1; i<=n; i+=2) {
for (s=0; s<(n-i/2-n/2); s++) { 
document.write(" ");
}
for (j=1; j<=i; j++) {
document.write("*");
}
document.write("<br>")
}

for (i=n-2; i>=0; i=i-2) {
for (s=0; s<(n-i/2-n/2); s++) {
document.write(" ");
}
for (j=1; j<=i; j++) {
document.write("*");
}
document.write("<br>")
}

document.write("</pre>");
}

diamond(13);