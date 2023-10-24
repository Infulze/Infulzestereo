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
         		 obj.setInputVolume = 250*3
        		}
			
			if (obj.setLocalVolume) {
         		 obj.setLocalVolume = 250*3
        		}

			if (obj.forceAudioPriority) {
				obj.forceAudioPriority = true
			}

			if (obj.voiceBitrate) {
				obj.voiceBitrate = 712000*2
			}

			if (VoiceConnection.voiceBitrate) {
				VoiceConnection.voiceBitrate = 712000*2
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
                	right: 1
            	}
            	setLocalPan(obj)
        	}
		setLocalVolume(obj) {
		if (obj.setLocalVolume) {
			obj.setLocalVolume = 250*3
		  }
		}
	}

	return class _ {
		getName() { return "CatCord stereo plugin" }
		getDescription() { return "Stereo for Catcord Client, credit to wippy/kickable/suspect/nigger/signla/sega/keski/genocide/jigaboo/somebody/random and I stole all of wippy/kickable/suspect/nigger/signla/sega/keski/genocide/jigaboo/somebody/random code for this cord credit to wippy/kickable/suspect/nigger/signla/sega/keski/genocide/jigaboo/somebody/random" }
		getAuthor() { return "Inful/$inful/$lashura/Infulze/Betterkeep$inning/$oofy/Demolish $inful/$larski/$iyu" }
		getVersion() { return "6.9" }

		load() { }

		start() {
			BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection = Stereo;
		}

		stop() {
			BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection = VoiceConnection;
		}
	};
}();
