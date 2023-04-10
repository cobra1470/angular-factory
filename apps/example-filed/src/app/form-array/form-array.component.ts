import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'default-angular-factory-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
  public siteOptionsForm?: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  
  public initForm(): void {

    this.siteOptionsForm = this.formBuilder.group({
      liveStreaming: this.formBuilder.group({
        siteStreamProviderList: new FormArray([])
      })
    })

    const _arr = [
      {
        providerId: "7a97508bf8757a1ee053e426e00a5259",
        providerName: "Youtube&",
        providerType: "ThirdParty",
        active: true,
        telemetrySessionType: "Youtube&",
        providerURL: "http://www.youtube.com",
        streamURLRegex: "st",
        providerLabel: "Youtube video",
        maxStreamingResolution: "10:1920x1080",
        enabled: false,
        streamingResolution: "1280x720"
      },
      {
        providerId: "94eb87fc29307889e053e426e00ae343",
        providerName: "Fackbook workplace",
        providerType: "ThirdParty",
        active: true,
        telemetrySessionType: "WEBEX_FB_WORKPLACE",
        providerURL: "https://work.facebook.com/live/start",
        providerLabel: "Fackbook workplace",
        enabled: false,
        streamingResolution: "1280x720"
      },
      {
        providerId: "953b618b2cag788de083e926e01a14tw",
        providerName: "Workplace from Facebook",
        providerType: "ThirdParty",
        active: true,
        telemetrySessionType: "WEBEX_FB_WORKPLACE",
        providerURL: "https://work.facebook.com/live/start",
        providerLabel: "Workplace from Facebook",
        enabled: false,
        streamingResolution: "1280x720"
      },
      {
        providerId: "7892468e3f4b2315e053e426e00aac06",
        providerName: "Facebook Live",
        providerType: "Webex",
        active: true,
        telemetrySessionType: "WEBEX_FB_LIVE",
        providerURL: "facebookdialog.php",
        providerLabel: "Facebook Live",
        enabled: false,
        streamingResolution: "1280x720"
      }
    ]

    const list1 = new FormArray([]);
    // list1.push(new FormControl(_arr[0]));
    (this.siteOptionsForm.get('liveStreaming') as FormGroup).setControl('siteStreamProviderList', list1)

    this.siteOptionsForm.setControl('siteStreamProviderList', list1)

    console.log(this.siteOptionsForm.getRawValue())


  }


  ngOnInit(): void {
    this.initForm();
  }

}
