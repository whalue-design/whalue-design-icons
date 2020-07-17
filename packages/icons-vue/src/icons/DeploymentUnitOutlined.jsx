// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DeploymentUnitOutlinedSvg from '@whalue-design/icons-svg/lib/asn/DeploymentUnitOutlined';

export default {
  name: 'IconDeploymentUnitOutlined',
  displayName: 'DeploymentUnitOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DeploymentUnitOutlinedSvg } },
      children,
    ),
};