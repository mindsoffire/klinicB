import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, IClntKYC, IClntKYCDisp } from '../services/auth.service';

@Component({
	selector: "Plugin",
	moduleId: module.id,
	templateUrl: "./plugin.component.html",
	styleUrls: ['./plugin.component.css']
})
export class PluginComponent implements OnInit {

	constructor(private router: Router, public tokenSvc: AuthService) { }

	hide = true;
	signUpOrLogInOrRstPW: string = '';
	emailPHolder = 'Enter your email'; pwPHolder = 'Enter your password';

	data: any;
	pwtries = 0; pwreset = this.tokenSvc.pwReset ? true : false; rstPW = null;

	ngOnInit() {
		// if (localStorage.getItem('nexToken') && localStorage.getItem('kyc')) this.router.navigate(['/agent-kyc']);
		if (this.tokenSvc.loggedIn) {
			this.router.navigate(['/home']);
		} else {
			this.tokenSvc.status = '..hello there.'
		}
	}

	async plugin(signUpOrLogInOrRstPW: string, emailID: string, pw: string) {

		this.tokenSvc.pwReset = signUpOrLogInOrRstPW === 'resetPW' ? false : this.tokenSvc.pwReset;

		await this.tokenSvc.auth(
			{
				encEmailID: this.tokenSvc.f_rotajF(emailID),
				hshPW: pw === undefined ? pw : this.tokenSvc.sha256_digest(pw),
				rstPW: signUpOrLogInOrRstPW === 'resetPW' ? this.tokenSvc.sha256_digest(pw) : null
			})
			.then(authObj => {
				if (!authObj.nexToken && this.tokenSvc.status == '..please log in with the right password.' && !this.tokenSvc.pwReset) {
					this.pwtries++;
					this.pwPHolder = `..tried password ${this.pwtries == 1 ? 'once' : this.pwtries + ' times'}.`
					if (this.pwtries > 3) {
						this.pwreset = true;
						this.pwPHolder = "Enter your NEW password to RESET it, or try again"
					}
				}
				console.log({ authObj, status: this.tokenSvc.status });
				if (authObj.clntKYCDisp.emailID && authObj.nexToken /* === JSON.parse(localStorage.getItem('nexToken')) */) {
					console.log(authObj.clntKYCDisp.emailID, authObj.nexToken);
					this.router.navigate(['/home']);
				}
			})
	}
}