// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CloudSyncOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CloudSyncOutlined';

export default {
  name: 'IconCloudSyncOutlined',
  displayName: 'CloudSyncOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CloudSyncOutlinedSvg } },
      children,
    ),
};