var td,tn,th;dt=new Date();tn=dt.getTime();dt.setTime(tn);th=dt.getHours();if(th>=20){td="nt"}else if(th>=17){td="dk"}else if(th>=9){td="dy"}else if(th>=5){td="dw"}else{td="nt"};