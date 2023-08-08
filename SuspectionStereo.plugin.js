//META{"name":"stereoSound"}*//

var stereoSound = function () {

	let VoiceConnection = BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection;

	class Stereo extends VoiceConnection {
		constructor(a, b, c, d, e) {
			super(a, b, c, d, e);
			this.origin = super.setTransportOptions;
		}
		setTransportOptions(obj) {
			if (obj.audioEncoder) {
				obj.audioEncoder.params = { stereo: "2" };
				obj.audioEncoder.channels = 2;
			}
			
			if (obj.fec) {
				obj.fec = false;
			}

			if (obj.encodingVoiceBitRate < 960000) {
				obj.encodingVoiceBitRate = 398000;
			}
			
			if (obj.setInputVolume) {
         		 obj.setInputVolume = 500*3
        		}
			
			if (obj.setLocalVolume) {
         		 obj.setLocalVolume = 500*3
        		}

			if (obj.forceAudioPriority) {
				obj.forceAudioPriority = true
			}

			if (obj.voiceBitrate) {
				obj.voiceBitrate = 512000*2
			}

			if (VoiceConnection.voiceBitrate) {
				VoiceConnection.voiceBitrate = 512000*2
			}

			if (VoiceConnection.forceAudioPriority) {
				VoiceConnection.forceAudioPriority = true
			}

			this.origin(obj);

			window.sound = this;
		}
		setLocalPan() {
            	this.localPans = {
                	left: 1,
                	right: 0
            	}
            	setLocalPan(obj)
        	}
		setLocalVolume(obj) {
		if (obj.setLocalVolume) {
			obj.setLocalVolume = 500*3
		  }
		}
	}

	return class _ {
		getName() { return "Suspection Stereo" }
		getDescription() { return "Stereo For The Suspection Client, Made By Suspect" }
		getAuthor() { return "Suspect, Wippy, Kickable" }
		getVersion() { return "1.0" }

		load() { }

		start() {
			BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection = Stereo;
		}

		stop() {
			BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection = VoiceConnection;
		}
	};
}();
