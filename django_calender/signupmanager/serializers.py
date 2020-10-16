from rest_framework import serializers
from .models import userdata

class usersSerializer(serializers.ModelSerializer):
#	url = serializers.HyperlinkedIdentityField(view_name="signupmanager:usersList")
	class Meta:
		model = userdata
		fields = '__all__'
